desc 'Start Pry with application environment loaded'
task :pry do
    exec "pry -r./server.rb"
end
