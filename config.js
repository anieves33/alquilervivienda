var config = {
    style: 'mapbox://styles/anieves33/cmhbuf03o000f01s94oljh1q1',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiYW5pZXZlczMzIiwiYSI6ImNtaDllbjdjcjEydWwya3M2Z25nZXM5ZmwifQ.PBMYY9Z6ZID9Yc2XSBdCgw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Vivir de alquiler en España',
    subtitle: 'Un recorrido por los datos que explican la crisis de vivienda en nuestro país.',
    byline: 'Ana Nieves',
    footer: 'Fuentes: Ministerio de Vivienda, Idealista, INE <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'El mapa de la desigualdad',
            description: 
            `
         <p>El precio del alquiler en España ha aumentado casi un <b>30% en la última década.</b> El precio de la vivienda, la subida del IPC y la vuelta al mercado libre de las Viviendas de Protección Oficial construidas hace años, han provocado una crisis habitacional que implica que vivir de alquiler en Madrid, Baleares o Cataluña es <b>1,8 veces más caro</b> que hacerlo en las comunidades de Castilla y León, Galicia, La Rioja, Murcia y Extremadura.</p>
<iframe src='https://flo.uri.sh/visualisation/25909440/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/25909440/?utm_source=embed&utm_campaign=visualisation/25909440' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>            
`,
           
           
            location: {
                center: [-9.08194, 40.67221],
                zoom: 5.06,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: '¿Cuánto sueldo dedicamos al alquiler?',
            description: 
            `
         <p>Aunque los expertos recomiendan <b>no dedicar más del 30% de los ingresos</b> a la vivienda, en zonas como Madrid se llega a dedicar al alquiler hasta más de la mitad del sueldo.
<br></br>
         <iframe src='https://flo.uri.sh/visualisation/25909819/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/25909819/?utm_source=embed&utm_campaign=visualisation/25909819' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>
         `,
            location: {
                center: [-3.70475, 40.41706],
                zoom: 11.27,
                pitch: 73.50,
                bearing: -35.20,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'La respuesta ciudadana',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Sindicat_de_Llogateres_-_llei_de_regulaci%C3%B3_del_preu_del_lloguer.jpg/500px-Sindicat_de_Llogateres_-_llei_de_regulaci%C3%B3_del_preu_del_lloguer.jpg',
            description: 'En 2017, y con el objetivo de hacer frente al incremento de los precios del alquiler y la especulación inmobiliaria, comienzan a surgir en diferentes puntos del Estado asociaciones de personas que viven de alquiler y que se organizan bajo el nombre de <b>Sindicato de Inquilinas</b>, y que se muestran como el relevo de quienes iniciaron el movimiento por la vivienda digna en España tras la crisis de 2008.',
            location: {
                center: [2.17418, 41.38493],
                zoom: 12.85,
                pitch: 10,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Desigualdades según tu código postal',
            description:             
            `
         <p>El lugar donde residimos puede implicar mayor de riesgo de exclusión social. Mientras la media española se situa en el 19%, en comunidades como <b>Andalucía, donde se dedica casi el 50% del sueldo al alquiler,</b> el riesgo de exclusión social asciende a casi el 30%.
<br></br>
<iframe src='https://flo.uri.sh/visualisation/25910844/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/25910844/?utm_source=embed&utm_campaign=visualisation/25910844' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>         `,
            location: {
                center: [-7.36296, 36.63341],
                zoom: 6.54,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'La década que lo ha cambiado todo',
            description:             
            `
         <p>El precio medio del alquiler en España ha aumentado significativamente en los últimos diez años. Ha pasado de unos 558€ en 2015 a 1.083€ en 2025, lo que representa un <b>incremento superior al 94%</b>. En el extremo más alto, regiones como País Vasco o las Islas Baleares pagan de media 1.900€ de alquiler.
<br></br>
<iframe src='https://flo.uri.sh/visualisation/25911599/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/25911599/?utm_source=embed&utm_campaign=visualisation/25911599' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>`,
            location: {
                center: [3.56045, 39.43328],
                zoom: 7.21,
                pitch: 49,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
            id: 'sixth-identifier',
            alignment: 'left',
            hidden: false,
            title: '¿Cómo regulan los alquileres en Europa?',
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/D%C3%B6bling_%28Wien%29_-_Karl-Marx-Hof.JPG',
            description: 'Hay que mirar a Europa Central y Europa del Norte para vislumbrar las regulaciones al alquiler más destacadas del continente: limitar las subidas en las zonas densamente pobladas de grandes ciudades y promover parques de vivienda destinados al alquiler social. <b>En Austria, el 24% de viviendas son de alquiler social,</b> una cifra que se dispara al 60% en su capital, Viena. Países Bajos <b>limitó los alquileres a 1.100 euros mensuales</b> a partir de 2024.',
            location: {
                center: [11.42052, 47.25581],
                zoom: 5.88,
                pitch: 53.79,
                bearing: -80.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'El futuro del alquiler en España',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Viviendas_de_Protecci%C3%B3n_Oficial_en_Astillero.jpg/1280px-Viviendas_de_Protecci%C3%B3n_Oficial_en_Astillero.jpg',
            description: 'Aunque en los últimos años se han anunciado medidas que pretenden mitigar la crisis de vivienda actual, las personas que viven de alquiler continúan observando cómo aumentan los precios mes a mes. España no siempre ha tenido un parque público de vivienda tan reducido como el actual. Según el Consejo Superior de los Colegios de Arquitectos de España (CSCAE), si no se hubieran descalificado las viviendas protegidas construidas en décadas anteriores, <b>la vivienda pública supondría hoy en torno al 38% del total.</b> La realidad, sin embargo, es muy distinta: <b>apenas llega al 2,5%.</b> Por eso ahora los expertos proponen que las VPO que se construyan no puedan desclasificarse.',
            location: {
                center: [-6.17117, 40.35263],
                zoom: 5.06,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        


    ]
};
