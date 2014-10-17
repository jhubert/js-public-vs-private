# Protecting Variables in Modules

This is a simple bit of code for demonstrating the difference between using
properties of an object to store items and using a local variable in the
module definition to store them.

This may seem like a trivial thing, but I've found it important to keep in
mind the differences.

The difference is simply that you can change the value and type of a property
in an instantated object, whereas you cannot change the type of a variable
defined locally in the module. The only thing you can do is iteract with the
value of the variable as it was intended. i.e. read the value of a string or
add / remove items from an array.
