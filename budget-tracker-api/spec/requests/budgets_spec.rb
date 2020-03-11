require 'rails_helper'

RSpec.describe 'Budgets API', type: :request do
  before(:each) do
    @user = User.create(name: 'Curtis',
                        email: 'curtis@example.com',
                        password: '123456',
                        password_confirmation: '123456')
    @budget = @user.budgets.build(name: 'March budget',
                                  start_date: '2020-03-01',
                                  end_date: '2020-03-31',
                                  income: 7000)
    @budget.save
  end

  def authenticated_header(user)
    token = Knock::AuthToken.new(payload: { sub: user.id }).token
    {
      'Authorization': "Bearer #{token}"
    }
  end

  describe 'GET /api/v1/budgets' do
    before(:each) { get '/api/v1/budgets', headers: authenticated_header(@user) }

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end

    it 'returns budget' do
      expect(json).not_to be_empty
      expect(json.size).to eq(1)
    end
  end

  describe 'GET /api/v1/budgets/:id' do
    before(:each) { get "/api/v1/budgets/#{@budget.id}", headers: authenticated_header(@user) }

    context 'when the budget record exists' do
      it 'returns the budget' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(@budget.id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end
  end

  describe 'POST /api/v1/budgets' do
    let(:valid_attributes) do
      {
        name: 'March budget',
        start_date: '2020-03-01',
        end_date: '2020-03-31',
        income: 7000
      }
    end

    let(:invalid_attributes) do
      {
        name: '',
        start_date: '',
        end_date: '',
        income: ''
      }
    end

    context 'when the request is valid' do
      before(:each) do
        post '/api/v1/budgets',
            headers: authenticated_header(@user),
            params: {
              budget: valid_attributes
            }
      end

      it 'creates a budget' do
        expect(json['start_date']).to eq('2020-03-01')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before(:each) do
        post '/api/v1/budgets',
            headers: authenticated_header(@user),
            params: {
              budget: invalid_attributes
            }
      end

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end
    end
  end

  describe 'DELETE /api/v1/budgets/:id' do
    before { delete "/api/v1/budgets/#{@budget.id}", headers: authenticated_header(@user) }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end
