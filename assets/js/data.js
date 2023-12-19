/* jshint esversion: 11 */

// Questions data
const flagData = [
    {
        flag: 'Burkina Faso',
        options: [
            { text: 'Denmark', correct: false },
            { text: 'Benin', correct: false },
            { text: 'Burkina Faso', correct: true },
        ]
    },
    {
        flag: 'Poland',
        options: [
            { text: 'Mozambique', correct: false },
            { text: 'Poland', correct: true },
            { text: 'Saint Lucia', correct: false },
        ]
    },
    {
        flag: 'North Macedonia',
        options: [
            { text: 'North Macedonia', correct: true},
            { text: 'Channel Islands', correct: false },
            { text: 'Rwanda', correct: false},
        ]
    },
    {
        flag: 'South Korea',
        options: [
            { text: 'Malta', correct: false },
            { text: 'South Korea', correct: true },
            { text: 'Guinea', correct: false},
        ]
    },
    {
        flag: 'Malawi',
        options: [
            { text: 'Malawi', correct: true },
            { text: 'Albania', correct: false},
            { text: 'North Korea', correct: false },
        ]
    },
    {
        flag: 'Brunei',
        options: [
            { text: 'Israel', correct: false },
            { text: 'India', correct: false },
            { text: 'Brunei', correct: true },
        ]
    },
    {
        flag: 'Guyana',
        options: [
            { text: 'Guyana', correct: true},
            { text: 'Angola', correct: false},
            { text: 'Barbados', correct: false },
        ]
    },
    {
    flag: 'Bahrain',
        options: [
            { text: 'Bahrain', correct: true},
            { text: 'Antigua and Barbuda', correct: false},
            { text: 'Azerbaijan', correct: false},
        ]
    },
    {
    flag: 'Cyprus',
        options: [
            { text: 'Cyprus', correct: true},
            { text: 'Senegal', correct: false},
            { text: 'Bolivia', correct: false},
        ]
    },
    {
    flag: 'Netherlands',
        options: [
            { text: 'Netherlands', correct: true},
            { text: 'Taiwan', correct: false},
            { text: 'Russia', correct: false},
        ]
    },
    {
    flag: 'Chad',
        options: [
            { text: 'Syria', correct: false},
            { text: 'Chad', correct: true},
            { text: 'Uganda', correct: false},
        ]
    },
{
    flag: 'Macao',
        options: [
            { text: 'Nepal', correct: false},
            { text: 'Macao', correct: true},
            { text: 'Afghanistan', correct: false},
        ]
},
{
    flag: 'Ireland',
        options: [
            { text: 'Ireland', correct: true},
            { text: 'Guyana', correct: false},
            { text: 'Bhutan', correct: false},
        ]
},
{
    flag: 'Cabo Verde',
        options: [
            { text: 'Canada', correct: false},
            { text: 'Cabo Verde', correct: true},
            { text: 'San Marino', correct: false},
        ]
},
{
    flag: 'Ghana',
        options: [
            { text: 'Ghana', correct: true},
            { text: 'Sierra Leone', correct: false},
            { text: 'South Korea', correct: false},
        ]
},
{
    flag: 'Kyrgyzstan',
        options: [
            { text: 'South Korea', correct: false},
            { text: 'Namibia', correct: false},
            { text: 'Kyrgyzstan', correct: true},
        ]
},
{
    flag: 'Latvia',
        options: [
            { text: 'Poland', correct: false},
            { text: 'Latvia', correct: true},
            { text: 'Costa Rica', correct: false},
        ]
},
{
    flag: 'Turkey',
        options: [
            { text: 'Turkey', correct: true},
            { text: 'Réunion', correct: false},
            { text: 'Liechtenstein', correct: false},
        ]
},
{
    flag: 'Vatican City',
        options: [
            { text: 'Vatican City', correct: true},
            { text: 'Comoros', correct: false},
            { text: 'Czech Republic', correct: false},
        ]
},
{
    flag: 'Haiti',
        options: [
            { text: 'Saudi Arabia', correct: false},
            { text: 'Haiti', correct: true},
            { text: 'China', correct: false},
        ]
}
]



// {
//     flag: '',
//         options: [
//             { text: '', correct: },
//             { text: '', correct: },
//             { text: '', correct: },
//         ]
// },
// {
//     flag: '',
//         options: [
//             { text: '', correct: },
//             { text: '', correct: },
//             { text: '', correct: },
//         ]
// },
// {
//     flag: '',
//         options: [
//             { text: '', correct: },
//             { text: '', correct: },
//             { text: '', correct: },
//         ]
// },
// {
//     flag: '',
//         options: [
//             { text: '', correct: },
//             { text: '', correct: },
//             { text: '', correct: },
//         ]
// },
// {
//     flag: '',
//         options: [
//             { text: '', correct: },
//             { text: '', correct: },
//             { text: '', correct: },
//         ]
// },
// {
//     flag: '',
//         options: [
//             { text: '', correct: },
//             { text: '', correct: },
//             { text: '', correct: },
//         ]
// },
// {
//     flag: '',
//         options: [
//             { text: '', correct: },
//             { text: '', correct: },
//             { text: '', correct: },
//         ]
// },
// {
//     flag: '',
//         options: [
//             { text: '', correct: },
//             { text: '', correct: },
//             { text: '', correct: },
//         ]
// },
// {
//     flag: '',
//         options: [
//             { text: '', correct: },
//             { text: '', correct: },
//             { text: '', correct: },
//         ]
// },
// {
//     flag: '',
//         options: [
//             { text: '', correct: },
//             { text: '', correct: },
//             { text: '', correct: },
//         ]
// },
// {
//     flag: '',
//         options: [
//             { text: '', correct: },
//             { text: '', correct: },
//             { text: '', correct: },
//         ]
// },
// {
//     flag: '',
//         options: [
//             { text: '', correct: },
//             { text: '', correct: },
//             { text: '', correct: },
//         ]
// },
// {
//     flag: '',
//         options: [
//             { text: '', correct: },
//             { text: '', correct: },
//             { text: '', correct: },
//         ]
// },
// {
//     flag: '',
//         options: [
//             { text: '', correct: },
//             { text: '', correct: },
//             { text: '', correct: },
//         ]
// },
// {
//     flag: '',
//         options: [
//             { text: '', correct: },
//             { text: '', correct: },
//             { text: '', correct: },
//         ]
// },
// {
//     flag: '',
//         options: [
//             { text: '', correct: },
//             { text: '', correct: },
//             { text: '', correct: },
//         ]
// },
// {
//     flag: '',
//         options: [
//             { text: '', correct: },
//             { text: '', correct: },
//             { text: '', correct: },
//         ]
// },
// {
//     flag: '',
//         options: [
//             { text: '', correct: },
//             { text: '', correct: },
//             { text: '', correct: },
//         ]
// },
// {
//     flag: '',
//         options: [
//             { text: '', correct: },
//             { text: '', correct: },
//             { text: '', correct: },
//         ]
// },
// {
//     flag: '',
//         options: [
//             { text: '', correct: },
//             { text: '', correct: },
//             { text: '', correct: },
//         ]
// },
// {
//     flag: '',
//         options: [
//             { text: '', correct: },
//             { text: '', correct: },
//             { text: '', correct: },
//         ]
// },
// {
//     flag: '',
//         options: [
//             { text: '', correct: },
//             { text: '', correct: },
//             { text: '', correct: },
//         ]
// },
// {
//     flag: '',
//         options: [
//             { text: '', correct: },
//             { text: '', correct: },
//             { text: '', correct: },
//         ]
// },
// {
//     flag: '',
//         options: [
//             { text: '', correct: },
//             { text: '', correct: },
//             { text: '', correct: },
//         ]
// },
// {
//     flag: '',
//         options: [
//             { text: '', correct: },
//             { text: '', correct: },
//             { text: '', correct: },
//         ]
// },
// {
//     flag: '',
//         options: [
//             { text: '', correct: },
//             { text: '', correct: },
//             { text: '', correct: },
//         ]
// },
// {
//     flag: '',
//         options: [
//             { text: '', correct: },
//             { text: '', correct: },
//             { text: '', correct: },
//         ]
// },
// {
//     flag: '',
//         options: [
//             { text: '', correct: },
//             { text: '', correct: },
//             { text: '', correct: },
//         ]
// },
//     // Last square bracket below
// ];