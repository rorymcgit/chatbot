require 'rails_helper'

RSpec.describe User, type: :model do
  FactoryGirl.define do
    factory :user do
      email "example@example.com"
      password "abc123def"
    end
  end

  before :each do
    @user = FactoryGirl.build(:user)
  end

  it "is valid with valid email and password attributes" do
    expect(@user).to be_valid
  end

  it "should not be valid without an email" do
    @user.email = nil
    expect(@user).to_not be_valid
  end

  it "should not be valid without a password" do
    @user.password = nil
    expect(@user).to_not be_valid
  end

end
