source "https://rubygems.org"

ruby '2.4.1'

gem "activerecord", "~> 4.1"
gem "pg"
gem "rake"
gem "sinatra", "~> 1.4"
gem "sinatra-activerecord", "~> 2.0"
gem "sinatra-contrib"
gem "sinatra-flash"
gem "nokogiri"
gem "sass"
gem 'sprockets'
gem "uglifier"

group :test, :development do
  gem "pry"
end

group :test do
  gem "rspec", "~> 3.4"
  gem "database_cleaner"
  gem "capybara"
  gem "shoulda"
  gem "shoulda-matchers", "~> 3.1", require: false
  gem "valid_attribute"
end

group :production do
  gem "puma"
end
