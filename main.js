//createBarGraph


function createBarGraph() {
    //setting Variables
    document.getElementById("cmd").style.display = "inline";
    var scale = 1000;

    var data = [];

    document.getElementById("chart").innerHTML = "";
    //getting values
    if (document.getElementById("input_v_1").value != 0) {
        if (document.getElementById("input_x_1").value == "") {
            window.alert("Please fill out the object for Value 1");
        }
        if (document.getElementById("input_x_1").value != "") {
            inp_1 = document.getElementById("input_x_1").value;
            inp_2 = document.getElementById("input_v_1").value;
            data.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_2").value != 0) {
        if (document.getElementById("input_x_2").value == "") {
            window.alert("Please fill out the object for Value 2");
        }
        if (document.getElementById("input_x_2").value != "") {
            inp_1 = document.getElementById("input_x_2").value;
            inp_2 = document.getElementById("input_v_2").value;
            data.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_3").value != 0) {
        if (document.getElementById("input_x_3").value == "") {
            window.alert("Please fill out the object for Value 3");
        }
        if (document.getElementById("input_x_3").value != "") {
            inp_1 = document.getElementById("input_x_3").value;
            inp_2 = document.getElementById("input_v_3").value;
            data.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }
    if (document.getElementById("input_v_4").value != 0) {
        if (document.getElementById("input_x_4").value == "") {
            window.alert("Please fill out the object for Value 4");
        }
        if (document.getElementById("input_x_4").value != "") {
            inp_1 = document.getElementById("input_x_4").value;
            inp_2 = document.getElementById("input_v_4").value;
            data.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_5").value != 0) {
        if (document.getElementById("input_x_5").value == "") {
            window.alert("Please fill out the object for Value 5");
        }
        if (document.getElementById("input_x_5").value != "") {
            inp_1 = document.getElementById("input_x_5").value;
            inp_2 = document.getElementById("input_v_5").value;
            data.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_6").value != 0) {
        if (document.getElementById("input_x_6").value == "") {
            window.alert("Please fill out the object for Value 6");
        }
        if (document.getElementById("input_x_6").value != "") {
            inp_1 = document.getElementById("input_x_6").value;
            inp_2 = document.getElementById("input_v_6").value;
            data.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_7").value != 0) {
        if (document.getElementById("input_x_7").value == "") {
            window.alert("Please fill out the object for Value 7");
        }
        if (document.getElementById("input_x_7").value != "") {
            inp_1 = document.getElementById("input_x_7").value;
            inp_2 = document.getElementById("input_v_7").value;
            data.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_8").value != 0) {
        if (document.getElementById("input_x_8").value == "") {
            window.alert("Please fill out the object for Value 8");
        }
        if (document.getElementById("input_x_8").value != "") {
            inp_1 = document.getElementById("input_x_8").value;
            inp_2 = document.getElementById("input_v_8").value;
            data.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_9").value != 0) {
        if (document.getElementById("input_x_9").value == "") {
            window.alert("Please fill out the object for Value 9");
        }
        if (document.getElementById("input_x_9").value != "") {
            inp_1 = document.getElementById("input_x_9").value;
            inp_2 = document.getElementById("input_v_9").value;
            data.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_10").value != 0) {
        if (document.getElementById("input_x_10").value == "") {
            window.alert("Please fill out the object for Value 10");
        }
        if (document.getElementById("input_x_10").value != "") {
            inp_1 = document.getElementById("input_x_10").value;
            inp_2 = document.getElementById("input_v_10").value;
            data.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_11").value != 0) {
        if (document.getElementById("input_x_11").value == "") {
            window.alert("Please fill out the object for Value 11");
        }
        if (document.getElementById("input_x_11").value != "") {
            inp_1 = document.getElementById("input_x_11").value;
            inp_2 = document.getElementById("input_v_11").value;
            data.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_12").value != 0) {
        if (document.getElementById("input_x_12").value == "") {
            window.alert("Please fill out the object for Value 12");
        }
        if (document.getElementById("input_x_12").value != "") {
            inp_1 = document.getElementById("input_x_12").value;
            inp_2 = document.getElementById("input_v_12").value;
            data.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("scaleInput").value != 0) {
        scale = Number(document.getElementById("scaleInput").value)
    }
    console.log(data)
    //setting variables
    colors = d3.scaleOrdinal(d3.schemeDark2);


    const width = 1000;
    const height = 600;
    const margin = {
        top: 50,
        bottom: 50,
        left: 100,
        right: 50
    };

    //creating the bar graph

    const svg = d3.select('#chart')
        .append('svg')
        .attr('width', width - margin.left - margin.right)
        .attr('height', height - margin.top - margin.bottom)
        .attr("viewBox", [0, 0, width, height]);

    const x = d3.scaleBand()
        .domain(d3.range(data.length))
        .range([margin.left, width - margin.right])
        .padding(0.7)

    const y = d3.scaleLinear()


        .domain([0, scale])
        // d3.max(data, function (d) {
        //     return d.scores;
        // })])
        .range([height - margin.bottom, margin.top]);

    svg
        .append("g")
        .attr("fill", colors)
        .selectAll("rect")
        .data(data.sort((b, a) => d3.descending(b.number, a.number)))
        .join("rect")
        .attr("x", (d, i) => x(i))
        .attr("y", d => y(d.number))
        .attr('title', (d) => d.number)
        .attr("class", "rect")
        .attr("height", d => y(0) - y(d.number))
        .attr("width", x.bandwidth());

    function yAxis(g) {
        g.attr("transform", `translate(${margin.left}, 0)`)
            .call(d3.axisLeft(y).ticks(null, data.format))
            .attr("font-size", '20px')
    }

    function xAxis(g) {
        g.attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x).tickFormat(i => data[i].grade))
            .attr("font-size", '20px')
    }

    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);
    svg.node();

}

//create Donut Chart


function createDonutChart() {
    document.getElementById("cmd").style.display = "inline";

    document.getElementById("chart").innerHTML = ""
    //setting variables
    var width = 600,
        height = 500;
    var colors = d3.scaleOrdinal(d3.schemeDark2);
    var svg = d3.select("#chart").append("svg")
        .attr("width", width).attr("height", height)
    var details = [];

    //getting values
    if (document.getElementById("input_v_1").value != 0) {
        if (document.getElementById("input_x_1").value == "") {
            window.alert("Please fill out the object for Value 1");
        }
        if (document.getElementById("input_x_1").value != "") {
            inp_1 = document.getElementById("input_x_1").value;
            inp_2 = document.getElementById("input_v_1").value;
            details.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_2").value != 0) {
        if (document.getElementById("input_x_2").value == "") {
            window.alert("Please fill out the object for Value 2");
        }
        if (document.getElementById("input_x_2").value != "") {
            inp_1 = document.getElementById("input_x_2").value;
            inp_2 = document.getElementById("input_v_2").value;
            details.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_3").value != 0) {
        if (document.getElementById("input_x_3").value == "") {
            window.alert("Please fill out the object for Value 3");
        }
        if (document.getElementById("input_x_3").value != "") {
            inp_1 = document.getElementById("input_x_3").value;
            inp_2 = document.getElementById("input_v_3").value;
            details.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_4").value != 0) {
        if (document.getElementById("input_x_4").value == "") {
            window.alert("Please fill out the object for Value 4");
        }
        if (document.getElementById("input_x_4").value != "") {
            inp_1 = document.getElementById("input_x_4").value;
            inp_2 = document.getElementById("input_v_4").value;
            details.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_5").value != 0) {
        if (document.getElementById("input_x_5").value == "") {
            window.alert("Please fill out the object for Value 5");
        }
        if (document.getElementById("input_x_5").value != "") {
            inp_1 = document.getElementById("input_x_5").value;
            inp_2 = document.getElementById("input_v_5").value;
            details.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_6").value != 0) {
        if (document.getElementById("input_x_6").value == "") {
            window.alert("Please fill out the object for Value 6");
        }
        if (document.getElementById("input_x_6").value != "") {
            inp_1 = document.getElementById("input_x_6").value;
            inp_2 = document.getElementById("input_v_6").value;
            details.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_7").value != 0) {
        if (document.getElementById("input_x_7").value == "") {
            window.alert("Please fill out the object for Value 7");
        }
        if (document.getElementById("input_x_7").value != "") {
            inp_1 = document.getElementById("input_x_7").value;
            inp_2 = document.getElementById("input_v_7").value;
            details.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_8").value != 0) {
        if (document.getElementById("input_x_8").value == "") {
            window.alert("Please fill out the object for Value 8");
        }
        if (document.getElementById("input_x_8").value != "") {
            inp_1 = document.getElementById("input_x_8").value;
            inp_2 = document.getElementById("input_v_8").value;
            details.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_9").value != 0) {
        if (document.getElementById("input_x_9").value == "") {
            window.alert("Please fill out the object for Value 9");
        }
        if (document.getElementById("input_x_9").value != "") {
            inp_1 = document.getElementById("input_x_9").value;
            inp_2 = document.getElementById("input_v_9").value;
            details.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_10").value != 0) {
        if (document.getElementById("input_x_10").value == "") {
            window.alert("Please fill out the object for Value 10");
        }
        if (document.getElementById("input_x_10").value != "") {
            inp_1 = document.getElementById("input_x_10").value;
            inp_2 = document.getElementById("input_v_10").value;
            details.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_11").value != 0) {
        if (document.getElementById("input_x_11").value == "") {
            window.alert("Please fill out the object for Value 11");
        }
        if (document.getElementById("input_x_11").value != "") {
            inp_1 = document.getElementById("input_x_11").value;
            inp_2 = document.getElementById("input_v_11").value;
            details.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_12").value != 0) {
        if (document.getElementById("input_x_12").value == "") {
            window.alert("Please fill out the object for Value 12");
        }
        if (document.getElementById("input_x_12").value != "") {
            inp_1 = document.getElementById("input_x_12").value;
            inp_2 = document.getElementById("input_v_12").value;
            details.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }
    //making of donut chart

    var data = d3.pie().sort(null).value(function (d) {
            return d.number;
        })
        (details);
    console.log(data);
    var segments = d3.arc()
        .innerRadius(100)
        .outerRadius(200)
        .padAngle(.05)
        .padRadius(50);
    var sections = svg.append("g").attr("transform", "translate(250, 300)")
        .selectAll("path").data(data);
    sections.enter().append("path").attr("d", segments).attr("fill",
        function (d) {
            return colors(d.data.number);
        });
    var content = d3.select("g").selectAll("text").data(data);
    content.enter().append("text").classed("inside", true).each(function (d) {
        var center = segments.centroid(d);
        d3.select(this).attr("x", center[0]).attr("y", center[1])
            .text(d.data.number);
    });
    var legends = svg.append("g").attr("transform", "translate(500,100)")
        .selectAll(".legends").data(data);
    var legend = legends.enter().append("g").classed("legends",
        true).attr("transform", function (d, i) {
        return "translate(0," + (i + 1) * 30 +
            ")";
    });
    legend.append("rect").attr("width", 20).attr("height", 20).attr("fill",
        function (d) {
            return colors(d.data.number);
        });
    legend.append("text").classed('label', true).text(function (d) {
            return d.data.grade;
        })
        .attr("fill", function (d) {
            return colors(d.data.number);
        })
        .attr("x", 30)
        .attr("y", 18);
}

//create pie chart


function createPieChart() {
    document.getElementById("cmd").style.display = "inline";

    document.getElementById("chart").innerHTML = ""

    //setting variables

    var width = 600,
        height = 500;
    var colors = d3.scaleOrdinal(d3.schemeDark2);
    var svg = d3.select("#chart").append("svg")
        .attr("width", width).attr("height", height)
    var details = [];

    //getting values

    if (document.getElementById("input_v_1").value != 0) {
        if (document.getElementById("input_x_1").value == "") {
            window.alert("Please fill out the object for Value 1");
        }
        if (document.getElementById("input_x_1").value != "") {
            inp_1 = document.getElementById("input_x_1").value;
            inp_2 = document.getElementById("input_v_1").value;
            details.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_2").value != 0) {
        if (document.getElementById("input_x_2").value == "") {
            window.alert("Please fill out the object for Value 2");
        }
        if (document.getElementById("input_x_2").value != "") {
            inp_1 = document.getElementById("input_x_2").value;
            inp_2 = document.getElementById("input_v_2").value;
            details.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_3").value != 0) {
        if (document.getElementById("input_x_3").value == "") {
            window.alert("Please fill out the object for Value 3");
        }
        if (document.getElementById("input_x_3").value != "") {
            inp_1 = document.getElementById("input_x_3").value;
            inp_2 = document.getElementById("input_v_3").value;
            details.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_4").value != 0) {
        if (document.getElementById("input_x_4").value == "") {
            window.alert("Please fill out the object for Value 4");
        }
        if (document.getElementById("input_x_4").value != "") {
            inp_1 = document.getElementById("input_x_4").value;
            inp_2 = document.getElementById("input_v_4").value;
            details.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_5").value != 0) {
        if (document.getElementById("input_x_5").value == "") {
            window.alert("Please fill out the object for Value 5");
        }
        if (document.getElementById("input_x_5").value != "") {
            inp_1 = document.getElementById("input_x_5").value;
            inp_2 = document.getElementById("input_v_5").value;
            details.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_6").value != 0) {
        if (document.getElementById("input_x_6").value == "") {
            window.alert("Please fill out the object for Value 6");
        }
        if (document.getElementById("input_x_6").value != "") {
            inp_1 = document.getElementById("input_x_6").value;
            inp_2 = document.getElementById("input_v_6").value;
            details.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_7").value != 0) {
        if (document.getElementById("input_x_7").value == "") {
            window.alert("Please fill out the object for Value 7");
        }
        if (document.getElementById("input_x_7").value != "") {
            inp_1 = document.getElementById("input_x_7").value;
            inp_2 = document.getElementById("input_v_7").value;
            details.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_8").value != 0) {
        if (document.getElementById("input_x_8").value == "") {
            window.alert("Please fill out the object for Value 8");
        }
        if (document.getElementById("input_x_8").value != "") {
            inp_1 = document.getElementById("input_x_8").value;
            inp_2 = document.getElementById("input_v_8").value;
            details.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_9").value != 0) {
        if (document.getElementById("input_x_9").value == "") {
            window.alert("Please fill out the object for Value 9");
        }
        if (document.getElementById("input_x_9").value != "") {
            inp_1 = document.getElementById("input_x_9").value;
            inp_2 = document.getElementById("input_v_9").value;
            details.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_10").value != 0) {
        if (document.getElementById("input_x_10").value == "") {
            window.alert("Please fill out the object for Value 10");
        }
        if (document.getElementById("input_x_10").value != "") {
            inp_1 = document.getElementById("input_x_10").value;
            inp_2 = document.getElementById("input_v_10").value;
            details.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_11").value != 0) {
        if (document.getElementById("input_x_11").value == "") {
            window.alert("Please fill out the object for Value 11");
        }
        if (document.getElementById("input_x_11").value != "") {
            inp_1 = document.getElementById("input_x_11").value;
            inp_2 = document.getElementById("input_v_11").value;
            details.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }

    if (document.getElementById("input_v_12").value != 0) {
        if (document.getElementById("input_x_12").value == "") {
            window.alert("Please fill out the object for Value 12");
        }
        if (document.getElementById("input_x_12").value != "") {
            inp_1 = document.getElementById("input_x_12").value;
            inp_2 = document.getElementById("input_v_12").value;
            details.push({
                grade: inp_1,
                number: inp_2
            });

        }
    }




    //making pie chart
    var data = d3.pie().sort(null).value(function (d) {
            return d.number;
        })
        (details);
    console.log(data);
    var segments = d3.arc()
        .innerRadius(0)
        .outerRadius(200)
        .padAngle(.05)
        .padRadius(50);
    var sections = svg.append("g").attr("transform", "translate(250, 300)")
        .selectAll("path").data(data);
    sections.enter().append("path").attr("d", segments).attr("fill",
        function (d) {
            return colors(d.data.number);
        });
    var content = d3.select("g").selectAll("text").data(data);
    content.enter().append("text").classed("inside", true).each(function (d) {
        var center = segments.centroid(d);
        d3.select(this).attr("x", center[0]).attr("y", center[1])
            .text(d.data.number);
    });
    var legends = svg.append("g").attr("transform", "translate(500,100)")
        .selectAll(".legends").data(data);
    var legend = legends.enter().append("g").classed("legends",
        true).attr("transform", function (d, i) {
        return "translate(0," + (i + 1) * 30 +
            ")";
    });
    legend.append("rect").attr("width", 20).attr("height", 20).attr("fill",
        function (d) {
            return colors(d.data.number);
        });
    legend.append("text").classed('label', true).text(function (d) {
            return d.data.grade;
        })
        .attr("fill", function (d) {
            return colors(d.data.number);
        })
        .attr("x", 30)
        .attr("y", 18);
}

function createLollipopGraph() {
    data = [];
    if (document.getElementById("input_v_1").value != 0) {
        if (document.getElementById("input_x_1").value == "") {
            window.alert("Please fill out the object for Value 1");
        }
        if (document.getElementById("input_x_1").value != "") {
            inp_1 = document.getElementById("input_x_1").value;
            inp_2 = document.getElementById("input_v_1").value;
            data.push({
                label: inp_1,
                value: inp_2
            });

        }
    }

    if (document.getElementById("input_v_2").value != 0) {
        if (document.getElementById("input_x_2").value == "") {
            window.alert("Please fill out the object for Value 2");
        }
        if (document.getElementById("input_x_2").value != "") {
            inp_1 = document.getElementById("input_x_2").value;
            inp_2 = document.getElementById("input_v_2").value;
            data.push({
                label: inp_1,
                value: inp_2
            });

        }
    }

    if (document.getElementById("input_v_3").value != 0) {
        if (document.getElementById("input_x_3").value == "") {
            window.alert("Please fill out the object for Value 3");
        }
        if (document.getElementById("input_x_3").value != "") {
            inp_1 = document.getElementById("input_x_3").value;
            inp_2 = document.getElementById("input_v_3").value;
            data.push({
                label: inp_1,
                value: inp_2
            });

        }
    }

    if (document.getElementById("input_v_4").value != 0) {
        if (document.getElementById("input_x_4").value == "") {
            window.alert("Please fill out the object for Value 4");
        }
        if (document.getElementById("input_x_4").value != "") {
            inp_1 = document.getElementById("input_x_4").value;
            inp_2 = document.getElementById("input_v_4").value;
            data.push({
                label: inp_1,
                value: inp_2
            });

        }
    }

    if (document.getElementById("input_v_5").value != 0) {
        if (document.getElementById("input_x_5").value == "") {
            window.alert("Please fill out the object for Value 5");
        }
        if (document.getElementById("input_x_5").value != "") {
            inp_1 = document.getElementById("input_x_5").value;
            inp_2 = document.getElementById("input_v_5").value;
            data.push({
                label: inp_1,
                value: inp_2
            });

        }
    }

    if (document.getElementById("input_v_6").value != 0) {
        if (document.getElementById("input_x_6").value == "") {
            window.alert("Please fill out the object for Value 6");
        }
        if (document.getElementById("input_x_6").value != "") {
            inp_1 = document.getElementById("input_x_6").value;
            inp_2 = document.getElementById("input_v_6").value;
            data.push({
                label: inp_1,
                value: inp_2
            });

        }
    }

    if (document.getElementById("input_v_7").value != 0) {
        if (document.getElementById("input_x_7").value == "") {
            window.alert("Please fill out the object for Value 7");
        }
        if (document.getElementById("input_x_7").value != "") {
            inp_1 = document.getElementById("input_x_7").value;
            inp_2 = document.getElementById("input_v_7").value;
            data.push({
                label: inp_1,
                value: inp_2
            });

        }
    }

    if (document.getElementById("input_v_8").value != 0) {
        if (document.getElementById("input_x_8").value == "") {
            window.alert("Please fill out the object for Value 8");
        }
        if (document.getElementById("input_x_8").value != "") {
            inp_1 = document.getElementById("input_x_8").value;
            inp_2 = document.getElementById("input_v_8").value;
            data.push({
                label: inp_1,
                value: inp_2
            });

        }
    }

    if (document.getElementById("input_v_9").value != 0) {
        if (document.getElementById("input_x_9").value == "") {
            window.alert("Please fill out the object for Value 9");
        }
        if (document.getElementById("input_x_9").value != "") {
            inp_1 = document.getElementById("input_x_9").value;
            inp_2 = document.getElementById("input_v_9").value;
            data.push({
                label: inp_1,
                value: inp_2
            });

        }
    }

    if (document.getElementById("input_v_10").value != 0) {
        if (document.getElementById("input_x_10").value == "") {
            window.alert("Please fill out the object for Value 10");
        }
        if (document.getElementById("input_x_10").value != "") {
            inp_1 = document.getElementById("input_x_10").value;
            inp_2 = document.getElementById("input_v_10").value;
            data.push({
                label: inp_1,
                value: inp_2
            });

        }
    }

    if (document.getElementById("input_v_11").value != 0) {
        if (document.getElementById("input_x_11").value == "") {
            window.alert("Please fill out the object for Value 11");
        }
        if (document.getElementById("input_x_11").value != "") {
            inp_1 = document.getElementById("input_x_11").value;
            inp_2 = document.getElementById("input_v_11").value;
            data.push({
                label: inp_1,
                value: inp_2
            });

        }
    }

    if (document.getElementById("input_v_12").value != 0) {
        if (document.getElementById("input_x_12").value == "") {
            window.alert("Please fill out the object for Value 12");
        }
        if (document.getElementById("input_x_12").value != "") {
            inp_1 = document.getElementById("input_x_12").value;
            inp_2 = document.getElementById("input_v_12").value;
            data.push({
                label: inp_1,
                value: inp_2
            });

        }
    }



    document.getElementById("cmd").style.display = "inline";
    document.getElementById("chart").innerHTML = "";

    var width = 900,
        height = 600;
    var scale = 1000;

    var color = d3.scaleOrdinal(d3.schemeDark2);

    data.forEach(function (d) {
        d.total = +d.value;
    });

    var margin = {
            top: 50,
            right: 50,
            bottom: 50,
            left: 100
        },
        width = width - margin.left - margin.right,
        height = height - margin.top - margin.bottom;
    if (document.getElementById("scaleInput").value != 0) {
        scale = Number(document.getElementById("scaleInput").value)
    }
    var x = d3.scaleBand()
        .domain(d3.range(data.length))
        .range([margin.left, width - margin.right])
        .padding(0.7)
    var y = d3.scaleLinear()
        .domain([0, scale])
        .range([height - margin.bottom, margin.top]);

    x.domain(data.map(function (d) {
        return d.label;
    }));

    var svg = d3.select('#chart')
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr('class', 'chart')
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var lollipop = svg.append('g').attr('class', 'lollipop');

    var bars = lollipop
        .append("g")
        .attr('class', 'bars')

    bars.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr('fill', function (d, i) {
            return color(i);
        })
        .attr("x", function (d) {
            return x(d.label);
        })
        .attr("width", x.bandwidth())
        .attr("y", height)
        .transition()
        .duration(1500)
        .attr("y", function (d) {
            return y(d.value);
        })
        .attr("height", function (d) {
            return height - y(d.total);
        });

    var lolliradian = 10;

    var circles = lollipop
        .append("g")
        .attr('class', 'circles');

    circles.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function (d) {
            return (x(d.label) + x.bandwidth() / 2);
        })
        .attr("cy", height)
        .attr("r", x.bandwidth() / 2)
        .attr("fill", "white")
        .attr("stroke-width", 5)
        .attr('stroke', function (d, i) {
            return color(i);
        })
        .transition()
        .duration(1500)
        .attr("cy", function (d) {
            return y(d.value);
        })
        .on("end", function () {
            d3.select(this)
                .transition()
                .duration(500)
                .attr("r", lolliradian);
        });


    lollipop.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-65)");

    lollipop.append("g")
        .call(d3.axisLeft(y));
}


//download

window.onload = function () {
    document.getElementById("cmd")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("chart");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'Datalizer.pdf',
                image: {
                    type: 'jpeg',
                    quality: 0.98
                },
                html2canvas: {
                    scale: 2
                },
                jsPDF: {
                    unit: 'in',
                    format: 'letter',
                    orientation: 'landscape'
                }
            };
            html2pdf().from(invoice).set(opt).save();
        })
}