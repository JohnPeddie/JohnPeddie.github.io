var config = {
        container: "#basic-example",

        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'nodeExample1'
        }
    },
    p0 = {
        text: {
            name: "Nikki",
            title: "Ryan's dad's partner",
            contact: "8th March",
        },

    },

    p1 = {
        parent: p0,
        text:{
            name: "Craig Scott",
            title: "Ryan's dad",
            contact: "8th March"
        },
        stackChildren: true,

    },
    p2 = {
        parent: p1,
        stackChildren: true,
        text:{
            name: "Ryan Scott",
            title: "9th March",
        },

    },
    p3 = {
        parent: p2,
        text:{
            name: "John Peddie",
            title: "13th March",

        },

    },

    p4 = {
        parent: p2,
        text:{
            name: "Luke Van Schaik",
            title: "13th March",

        },

    },

    p5 = {
        parent: p2,
        text:{
            name: "Aidan Wilton",
            title: "13th March",

        },

    },

    p6 = {
        parent: p2,
        text:{
            name: "Uzair Mannac",
            title: "13th March",

        },

    },

    p7 = {
        parent: p2,
        text:{
            name: "Alex Retief",
            title: "13th March",

        },

    },
    p8 = {
        parent: p2,
        text:{
            name: "Julia Kay Naidoo",
            title: "13th March",

        },

    },
    p9 = {
        parent: p4,

        text:{
            name: "Andre Beyers",
            title: "16th March",

        },

    },

    p10 = {
        parent: p9,
        text:{
            name: "Aqeel Lalla",
            title: "21st March",

        },

    },
    p11 = {
        parent: p5,
        text:{
            name: "Sarah Lampert",
            title: "Unknown Date",

        },

    }

    // cio = {
    //     parent: p0,
    //     text:{
    //         name: "Ron Blomquist",
    //         title: "Chief Information Security Officer"
    //     },
    //
    // },
    // ciso = {
    //     parent: p0,
    //     text:{
    //         name: "Michael Rubin",
    //         title: "Chief Innovation Officer",
    //         contact: {val: "we@aregreat.com", href: "mailto:we@aregreat.com"}
    //     },
    //
    // },
    // cio2 = {
    //     parent: p0,
    //     text:{
    //         name: "Erica Reel",
    //         title: "Chief Customer Officer"
    //     },
    //     link: {
    //         href: "http://www.google.com"
    //     },
    //
    // },
    // ciso2 = {
    //     parent: p0,
    //     text:{
    //         name: "Alice Lopez",
    //         title: "Chief Communications Officer"
    //     },
    //
    // },
    // ciso3 = {
    //     parent: p0,
    //     text:{
    //         name: "Mary Johnson",
    //         title: "Chief Brand Officer"
    //     },
    //
    // },
    // ciso4 = {
    //     parent: p0,
    //     text:{
    //         name: "Kirk Douglas",
    //         title: "Chief Business Development Officer"
    //     },
    //
    // }

    chart_config = [
        config,
        p0,
        p1,
        p2,
        p3,
        p4,
        p5,
        p6,
        p7,
        p8,
        p9,
        p10,
        p11
        // p4,
        // ciso,
        // cio2,
        // ciso2,
        // ciso3,
        // ciso4
    ];




    // Another approach, same result
    // JSON approach

/*
    var chart_config = {
        chart: {
            container: "#basic-example",

            connectors: {
                type: 'step'
            },
            node: {
                HTMLclass: 'nodeExample1'
            }
        },
        nodeStructure: {
            text: {
                name: "Mark Hill",
                title: "Chief executive officer",
                contact: "Tel: 01 213 123 134",
            },
            image: "../headshots/2.jpg",
            children: [
                {
                    text:{
                        name: "Joe Linux",
                        title: "Chief Technology Officer",
                    },
                    stackChildren: true,
                    image: "../headshots/1.jpg",
                    children: [
                        {
                            text:{
                                name: "Ron Blomquist",
                                title: "Chief Information Security Officer"
                            },
                            image: "../headshots/8.jpg"
                        },
                        {
                            text:{
                                name: "Michael Rubin",
                                title: "Chief Innovation Officer",
                                contact: "we@aregreat.com"
                            },
                            image: "../headshots/9.jpg"
                        }
                    ]
                },
                {
                    stackChildren: true,
                    text:{
                        name: "Linda May",
                        title: "Chief Business Officer",
                    },
                    image: "../headshots/5.jpg",
                    children: [
                        {
                            text:{
                                name: "Alice Lopez",
                                title: "Chief Communications Officer"
                            },
                            image: "../headshots/7.jpg"
                        },
                        {
                            text:{
                                name: "Mary Johnson",
                                title: "Chief Brand Officer"
                            },
                            image: "../headshots/4.jpg"
                        },
                        {
                            text:{
                                name: "Kirk Douglas",
                                title: "Chief Business Development Officer"
                            },
                            image: "../headshots/11.jpg"
                        }
                    ]
                },
                {
                    text:{
                        name: "John Green",
                        title: "Chief accounting officer",
                        contact: "Tel: 01 213 123 134",
                    },
                    image: "../headshots/6.jpg",
                    children: [
                        {
                            text:{
                                name: "Erica Reel",
                                title: "Chief Customer Officer"
                            },
                            link: {
                                href: "http://www.google.com"
                            },
                            image: "../headshots/10.jpg"
                        }
                    ]
                }
            ]
        }
    };

*/
