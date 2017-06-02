# Now let's write a Queue class. We will need the following instance methods: enqueue(el), dequeue, and show.
# Test your code to ensure it follows the principle of FIFO.

class Queue

  def initialize
    @queue = []
  end

  def enqueue(el)
    @queue.unshift(el)
  end


  def dequeue
    @queue.pop

  end

  def show
    puts "#{@queue}"
  end

end

my_queue = Queue.new

my_queue.enqueue(2)
my_queue.enqueue(3)
my_queue.enqueue(7)
my_queue.show
my_queue.dequeue
my_queue.show
