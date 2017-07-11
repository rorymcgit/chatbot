require 'rails_helper'

RSpec.describe Bot, type: :model do
  FactoryGirl.define do
    factory :bot do
      name "Game Master Bot"
    end
  end

  before :each do
    @bot = FactoryGirl.build(:bot)
  end

  it "is valid with valid name attribute" do
    expect(@bot).to be_valid
  end

  it "should not be valid without a name" do
    @bot.name = nil
    expect(@bot).to_not be_valid
  end
end
