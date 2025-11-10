SELECT Person.firstName, Person.lastName, Address.city, Address.state
FROM person
LEFT JOIN Address ON Person.personId=Address.personId;