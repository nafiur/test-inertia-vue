require "test_helper"

class MyProfileControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get my_profile_index_url
    assert_response :success
  end
end
