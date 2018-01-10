require "sinatra"
require "sinatra/json"
require "json"
require 'sinatra/activerecord'
require 'sinatra/reloader'
require 'sinatra/flash'
require 'nokogiri'
require 'open-uri'
require 'sprockets'

enable :sessions

set :bind, '0.0.0.0'  # bind to all interfaces
set :public_folder, File.join(File.dirname(__FILE__), "public")
set :views, File.dirname(__FILE__) + "/app/views/templates"

configure :development, :test do
  require "pry"
end

Dir[File.join(File.dirname(__FILE__), 'app', '**', '*.rb')].each do |file|
  require file
  also_reload file
end

get ('/styles.css'){ scss :"../stylesheets/application" }

get '/' do
  erb :index
end

get '/api/v1/questions' do
  { questions: Question.all }.to_json
end

get '/api/v1/random-question' do
  offset = rand(Question.count)
  random_question = Question.offset(offset).first

  { random_question: random_question }.to_json
end
