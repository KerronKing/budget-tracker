require 'rails_helper'

RSpec.describe 'Budget Totals API', type: :request do
  let!(:budget) { create(:budget) }
  let!(:budget_totals) { create_list(:budget_total, 5, budget_id: budget.id) }
  let(:budget_id) { budget.id }
  let(:budget_total_id) { budget_totals.first.id }

  describe 'GET /api/v1/budget/#{budget_id}/budget_totals/:id' do
    before(:each) { get "/api/v1/budgets/#{budget_id}/budget_totals/#{budget_total_id}" }

    context 'when the budget record exists' do
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:budget_total_id) { 10 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end
    end
  end

  describe 'POST /api/v1/budget/#{budget_id}/budget_totals' do
    let(:valid_attributes) { {
      date: '2020-03-01', 
      rent: 500,
      transport: 200, 
      food: 400,
      entertainment: 50, 
      utilities: 150,
      other: 10
    } }

    let(:invalid_attributes) { {
      date: '  ',
    } }
    
    context 'when the request is valid' do
      before(:each) { post "/api/v1/budgets/#{budget_id}/budget_totals", params: { budget_total: valid_attributes } }

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the request is invalid' do
      before(:each) { post "/api/v1/budgets/#{budget_id}/budget_totals", params: { budget_total: invalid_attributes } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end
    end
  end

  describe 'DELETE /api/v1/budget/#{budget_id}/budget_totals/:id' do
    before { delete "/api/v1/budgets/#{budget_id}/budget_totals/#{budget_total_id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end