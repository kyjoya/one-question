task :scrape_questions do
  Question.delete_all

  url = "http://www.https://www.themandagies.com/101-road-trip-questions/"
  data = Nokogiri::HTML(open(url))
  questions = data.css('td.main').css('li').text.strip

  question_string = ""
  parsed_questions = []

  questions.each_char do |char|
    if char != '?'
      question_string += char
    else
      question_string += "?"
      parsed_questions << question_string.gsub(/\A[[:space:]]+|[[:space:]]+\z/, '')
      question_string = ""
    end
  end

  parsed_questions.each do |question|
    Question.find_or_create_by(question: question)
  end
end
