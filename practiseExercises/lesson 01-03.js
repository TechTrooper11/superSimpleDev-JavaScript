// Lesson 2 Exercises - Numbers and Math
`Items (${1 + 1}): $${(2095 + 799) / 100}`
'Items (2): $28.94'

//2a
`$${10 + 3*8 + 5}`
'$39'

 //2b
`$${39 / 3}`
'$13'

//2c
`$${(1850 + 750) / 100}`
'$26'

//2d
`$${ ((1850 + 750) / 100) * 0.1} `
'$2.6 '

//2e
`$${ ((1850 + 750) / 100) * 0.2 }`
'$5.2'

//round off till two decimal places
Math.round(num * 100) / 100

// round off till three decimal places
Math.round(num * 1000) / 1000

//2f
`$${ (2095 + 1899 + 799) / 100}`
'$47.93'

//2g
`$${ ((2095 + 1899 + 799) / 100) + (499 / 100)}`
'$52.92'

//2h
`$${ (((2095 + 1899 + 799) / 100) + (499 / 100)) * 0.1 }`
'$5.292000000000001'

Math.round(5.292000000000001);
5
Math.round(5.292000000000001 * 100) / 100
5.29

//2i
`Order total: $${ ((2095 + 1899 + 799) / 100) + (499 / 100) + (529 / 100)}`
'Order total: $58.21'

//2j
Math.floor(2.8)

//2k
Math.ceil(2.8)


// Lesson 3 Exercises - strings

//3a
'My name is : shivam upadhyay'

//3b
'shivam upadhyay'
//3c
'M name is :' +  ' shivam uapdhyay'
'M name is : shivam uapdhyay'

//3d
'Total cost : ' +  `$${5 + 3}`
'Total cost : $8'

//3e
`Total cost : ` + `$${5 + 3}`
'Total cost : $8'
`Total cost : $${5 + 3}`
'Total cost : $8'

//3f
alert(`Total cost : $${5 + 3}`);
undefined

//3g
'Total cost : $' + ((599 + 295) / 100)
'Total cost : $8.94'

//3h
`Total cost : $${(599 + 295) / 100}`
'Total cost : $8.94'


//3i
alert(`Total cost : $${(599 + 295) / 100}`);
undefined

//3j
alert(`Total cost : $${(599 + 295) / 100} \n Thank you again`);
undefined
