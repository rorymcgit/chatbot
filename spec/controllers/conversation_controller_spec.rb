require 'rails_helper'

RSpec.describe ConversationController, type: :controller do

  describe "GET #index" do

    context "not signed in" do
      it "redirects to sign in page" do
        get :index
        expect(response).to redirect_to("/users/sign_in")
      end
    end

    context "signed in" do
      before :each do
        sign_in FactoryGirl.create(:user)
        get :index
      end

      it "goes to conversation#index when signed in" do
        expect(response).to have_http_status(:success)
      end

      it "renders the conversation/index template" do
        expect(response).to render_template(:index)
      end
    end
  end
end
