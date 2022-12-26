const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');
const { title } = require('process');
const port = 3000

const app = express();
let imgURL = ["/Images/MCS-201 Programming in C and Python.png", "/Images/MCS-208 Data Structures and Algorithms.png", "/Images/MCS-211 Design-and-Analysis-of-Algorithms.jpg", "/Images/MCS-212 Discrete-Mathematics.jpg", "/Images/MCS-213 Software-Engineering.jpg", "/Images/MCS-214 Professional-Skills-and-Ethics.jpg", "/Images/MCS-215 Security-and-Cyber-Laws.jpg", "/Images/MCSL-216 DAA-and-Web-Design-Lab.jpg", "/Images/MCSL-217 Software-Engineering-Lab.jpg"];
let SubName = ["MCS-201: Programming in C and Python", "MCS-208: Data Structures and Algorithms", "MCS-211: Design and Analysis of Algorithms", "MCS-212: Discrete Mathematics", "MCS-213: Software Engineering", "MCS-214: Professional Skills and Ethics", "MCS-215: Security and Cyber Laws", "MCSL-216: DAA and Web Design Lab", "MCSL-217: Software Engineering Lab"];
let SubjectTitle = ["MCS-201", "MCS-208", "MCS-211", "MCS-212", "MCS-213", "MCS-214", "MCS-215", "MCS-216", "MCS-217"];
let pages = ["home", "about", "contact", "help"];
let block = ["Block-1", "Block-2", "Block-3", "Block-4"];



app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.render(pages[0], {
        ImgUrl: imgURL,
        subjectNames: SubName,
        subjectTitle: SubjectTitle
    });
});

app.get("/home", function (req, res) {
    res.render(pages[0], {
        ImgUrl: imgURL,
        subjectNames: SubName,
        subjectTitle: SubjectTitle
    });
});

app.get("/about", function (req, res) {
    res.render(pages[1], {});
});

app.get("/contact", function (req, res) {
    res.render(pages[2], {});
});


SubjectTitle.forEach(element => {
    block.forEach(item => {
        app.get("/subject/" + element + "/" + item, function (req, res) {
            res.render("sorry");
        });
    });
});

SubjectTitle.forEach(element => {
    app.get("/subject/" + element, function (req, res) {
        res.render(element, {
            title: SubName,
            blockTitle: SubjectTitle,
            blockName: block
        });
    });
});

app.listen(process.env.PORT || port, () => console.log('Server is running at port ', port));