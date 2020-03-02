require 'spec_helper'

RSpec.describe BudgetsController, type: :controller do
  let(:valid_attributes) do
    {
      start_date: "01-03-2020",
      end_date: "31-03-2020",
      income: 7000
    }
  end

  let(:invalid_attributes) do
    {
      start_date: nil,
      end_date: nil,
      income: nil
    }
  end

  describe "GET #index" do
    it "returns a success response" do
      get :index, params: {}
      expect(response).to be_successful
    end
  end
end
