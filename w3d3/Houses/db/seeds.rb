# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
house_1 = House.create(address: "4321 Collins Ct, MV")
house_2 = House.create(address: "445 Coll Ct, MV")
house_3 = House.create(address: "43 Iris Ct, PA")

person_1  = Person.create(name: "Lis", house_id:  house_1.id)
person_2  = Person.create(name: "Alex", house_id:  house_1.id)
person_3  = Person.create(name: "Mary", house_id:  house_2.id)
person_4  = Person.create(name: "Laura", house_id:  house_2.id)
person_5  = Person.create(name: "Meyli", house_id:  house_3.id)
person_6  = Person.create(name: "Angel", house_id:  house_3.id)
