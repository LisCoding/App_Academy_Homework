# Let's write a Stack class. To do this, use the following framework:
# To test that your code works, create a new instance of the Stack class, and play around with adding and removing elements.
#Remember, a stack follows the principle of LIFO!

  class Stack
    def initialize
      # create ivar to store stack here
      @stack = []
    end

    def add(el)
      # adds an element to the stack
      @stack.push(el)
    end

    def remove
      # removes one element from the stack
      @stack.pop
    end

    def show
      # return a copy of the stack
      puts "#{@stack}"
      #@stack.dup
    end
  end

my_stack = Stack.new
my_stack.add(4)
my_stack.add(5)
my_stack.add(8)
my_stack.remove
my_stack.show
