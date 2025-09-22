let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        {
            sectionNumber: "001",
            enrolled: 95,
            instructor: "Mr. Jardin"
        }, {
            sectionNumber: "002",
            enrolled: 110,
            instructor: "Mr. Bahinting"
        },
        {
            sectionNumber: "003",
            enrolled: 100,
            instructor: "Mr. Alburo"
        },
        {
            sectionNumber: "005",
            enrolled: 190,
            instructor: "Mr. Engracia"
        },
        {
            sectionNumber: "006",
            enrolled: 97,
            instructor: "Mr. Pepito"
        }

    ]
};

function setCourseInformation(course) {
    document.querySelector("#courseName").innerHTML = `${course.code} - ${course.title}`;
}

function sectionTemplate(section) {
    return `<tr> 
    <td>${section.sectionNumber}</td>
    <td>${section.enrolled}</td>
    <td>${section.instructor}</td>     
    </tr>`;
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections tbody").innerHTML = html.join("");
    }

    setCourseInformation(aCourse);
    renderSections(aCourse.sections);