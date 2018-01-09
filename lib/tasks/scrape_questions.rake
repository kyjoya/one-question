task :scrape_questions do
  url = "http://www.signupgenius.com/business/icebreakerquestionswork.cfm"
  data = Nokogiri::HTML(open(url))
  questions = data.css('td.main').css('li').text.strip

  question_string = ""
  parsed_questions = []

  questions.each_char do |char|
    if char != '?'
      question_string += char
    else
      question_string += "?"
      parsed_questions << question_string
      question_string = ""
    end
  end

  parsed_questions.each do |question|
    Question.create(question: question)
  end
end
