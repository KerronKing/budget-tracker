require 'rails_helper'

RSpec.describe 'Budgets API', type: :request do
  let!(:user) { create(:user) }
  let!(:budgets) { create_list(:budget, 5, user_id: user.id) }
  let(:budget_id) { budgets.first.id }

  describe 'GET /api/v1/budgets' do
    before(:each) { get '/api/v1/budgets' }

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end

    it 'returns budgets' do
      expect(json).not_to be_empty
      expect(json.size).to eq(5)
    end
  end

  describe 'GET /api/v1/budgets/:id' do
    before(:each) { get "/api/v1/budgets/#{budget_id}" }

    context 'when the budget record exists' do
      it 'returns the budget' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(budget_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:budget_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end
    end
  end

  describe 'POST /api/v1/budgets' do
    let(:valid_attributes) do
      {
        start_date: '2020-03-01',
        end_date: '2020-03-31',
        income: 7000
      }
    end

    let(:invalid_attributes) do
      {
        start_date: '',
        end_date: '',
        income: ''
      }
    end

    context 'when the request is valid' do
      before(:each) { post '/api/v1/budgets', params: { budget: valid_attributes } }

      it 'creates a budget' do
        expect(json['start_date']).to eq('2020-03-01')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before(:each) { post '/api/v1/budgets', params: { budget: invalid_attributes } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end
    end
  end

  describe 'DELETE /api/v1/budgets/:id' do
    before { delete "/api/v1/budgets/#{budget_id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end
