require 'test_helper'

class GreetingsControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get greetings_index_url
    assert_response :success
  end

  test 'should get create' do
    get greetings_create_url
    assert_response :success
  end

  test 'should get update' do
    get greetings_update_url
    assert_response :success
  end

  test 'should get destroy' do
    get greetings_destroy_url
    assert_response :success
  end
end
