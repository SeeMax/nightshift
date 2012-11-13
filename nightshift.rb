require 'sinatra'

get '/' do
  erb :index
end

get "/booked" do
  erb :booked
end
