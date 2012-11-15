require 'sinatra'


get '/' do
  @date = Date.today.day
  @dates = [26,27,28,29,30,3,4,5,6,7]
  @booked_dates = []
  erb :index
end

get "/booked" do
  erb :booked
end
