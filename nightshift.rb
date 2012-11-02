require 'sinatra'

get '/' do
  erb :index
end

get "/available" do
  erb :available
end
