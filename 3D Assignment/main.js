function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    var vertices = [
        //M - front
        -0.7, -0.2, 0,  1, 0, 0,    0, 0, 1, //0
        -0.4, -0.5, 0,  1, 0, 0,    0, 0, 1, //1
        -0.7, -0.8, 0,  1, 0, 0,    0, 0, 1, //2
        -0.1, -0.2, 0,  1, 0, 0,    0, 0, 1, //3
        -0.4, -0.5, 0,  1, 0, 0,    0, 0, 1, //4
        -0.1, -0.8, 0,  1, 0, 0,    0, 0, 1, //5
        -0.55, -0.65, 0,  1, 0, 0,    0, 0, 1, //6
        -0.4, -0.5, 0,  1, 0, 0,    0, 0, 1, //7
        -0.4, -0.8, 0,  1, 0, 0,    0, 0, 1, //8
        -0.25, -0.65, 0,  1, 0, 0,    0, 0, 1, //9
        //M - back
        -0.7, -0.2, -0.2,  1, 0, 0,    0, 0, -1, //10
        -0.4, -0.5, -0.2,  1, 0, 0,    0, 0, -1, //11
        -0.7, -0.8, -0.2,  1, 0, 0,    0, 0, -1, //12
        -0.1, -0.2, -0.2,  1, 0, 0,    0, 0, -1, //13
        -0.4, -0.5, -0.2,  1, 0, 0,    0, 0, -1, //14
        -0.1, -0.8, -0.2,  1, 0, 0,    0, 0, -1, //15
        -0.55, -0.65, -0.2,  1, 0, 0,    0, 0, -1, //16
        -0.4, -0.5, -0.2,  1, 0, 0,    0, 0, -1, //17
        -0.4, -0.8, -0.2,  1, 0, 0,    0, 0, -1, //18
        -0.25, -0.65, -0.2,  1, 0, 0,    0, 0, -1, //19
        //M - left
        -0.7, -0.2, 0,  1, 0, 0,    -1, 0, 0, //20
        -0.7, -0.8, 0,  1, 0, 0,    -1, 0, 0, //21
        -0.7, -0.8, -0.2,  1, 0, 0,    -1, 0, 0, //22
        -0.7, -0.2, -0.2,  1, 0, 0,    -1, 0, 0, //23
        //M - right
        -0.1, -0.2, 0,  1, 0, 0,    1, 0, 0, //24
        -0.1, -0.8, 0,  1, 0, 0,    1, 0, 0, //25
        -0.1, -0.8, -0.2,  1, 0, 0,    1, 0, 0, //26
        -0.1, -0.2, -0.2,  1, 0, 0,    1, 0, 0, //27
        //M - top
        -0.7, -0.2, 0,  1, 0, 0,    0, 1, 0, //28
        -0.4, -0.5, 0,  1, 0, 0,    0, 1, 0, //29
        -0.4, -0.5, -0.2,  1, 0, 0,    0, 1, 0, //30
        -0.7, -0.2, -0.2,  1, 0, 0,    0, 1, 0, //31
        -0.1, -0.2, 0,  1, 0, 0,    0, 1, 0, //32
        -0.1, -0.2, -0.2,  1, 0, 0,    0, 1, 0, //33
        //M - bottom
        -0.7, -0.8, 0,  1, 0, 0,    0, -1, 0, //34
        -0.55, -0.65, 0,  1, 0, 0,    0, -1, 0, //35
        -0.7, -0.8, -0.2,  1, 0, 0,    0, -1, 0, //36
        -0.55, -0.65, -0.2,  1, 0, 0,    0, -1, 0, //37
        -0.4, -0.8, 0,  1, 0, 0,    0, -1, 0, //38
        -0.25, -0.65, 0,  1, 0, 0,    0, -1, 0, //39
        -0.4, -0.8, -0.2,  1, 0, 0,    0, -1, 0, //40
        -0.25, -0.65, -0.2,  1, 0, 0,    0, -1, 0, //41
        -0.1, -0.8, 0,  1, 0, 0,    0, -1, 0, //42
        -0.1, -0.8, -0.2,  1, 0, 0,    0, -1, 0, //43

        //I - front
        0.5, -0.8, 0, 0, 1, 0,    0, 0, 1, //44
        0.4, -0.7, 0, 0, 1, 0,    0, 0, 1, //45
        0.5, -0.6, 0, 0, 1, 0,    0, 0, 1, //46
        0.4, -0.5, 0, 0, 1, 0,    0, 0, 1, //47
        0.5, -0.4, 0, 0, 1, 0,    0, 0, 1, //48
        0.4, -0.3, 0, 0, 1, 0,    0, 0, 1, //49
        0.5, -0.2, 0, 0, 1, 0,    0, 0, 1, //50
        //I - back
        0.5, -0.8, -0.2, 0, 1, 0,    0, 0, -1, //51
        0.4, -0.7, -0.2, 0, 1, 0,    0, 0, -1, //52
        0.5, -0.6, -0.2, 0, 1, 0,    0, 0, -1, //53
        0.4, -0.5, -0.2, 0, 1, 0,    0, 0, -1, //54
        0.5, -0.4, -0.2, 0, 1, 0,    0, 0, -1, //55
        0.4, -0.3, -0.2, 0, 1, 0,    0, 0, -1, //56
        0.5, -0.2, -0.2, 0, 1, 0,    0, 0, -1, //57
        //I - left
        0.4, -0.7, 0, 0, 1, 0,    -1, 0, 0, //58
        0.4, -0.5, 0, 0, 1, 0,    -1, 0, 0, //59
        0.4, -0.3, 0, 0, 1, 0,    -1, 0, 0, //60
        0.4, -0.7, -0.2, 0, 1, 0,    -1, 0, 0, //61
        0.4, -0.5, -0.2, 0, 1, 0,    -1, 0, 0, //62
        0.4, -0.3, -0.2, 0, 1, 0,    -1, 0, 0, //63
        //I - right
        0.5, -0.8, 0, 0, 1, 0,    1, 0, 0, //64
        0.5, -0.6, 0, 0, 1, 0,    1, 0, 0, //65
        0.5, -0.4, 0, 0, 1, 0,    1, 0, 0, //66
        0.5, -0.2, 0, 0, 1, 0,    1, 0, 0, //67
        0.5, -0.8, -0.2, 0, 1, 0,    1, 0, 0, //68
        0.5, -0.6, -0.2, 0, 1, 0,    1, 0, 0, //69
        0.5, -0.4, -0.2, 0, 1, 0,    1, 0, 0, //70
        0.5, -0.2, -0.2, 0, 1, 0,    1, 0, 0, //71
        //I - top
        0.4, -0.3, 0, 0, 1, 0,    0, 1, 0, //72
        0.5, -0.2, 0, 0, 1, 0,    0, 1, 0, //73
        0.4, -0.3, -0.2, 0, 1, 0,    0, 1, 0, //74
        0.5, -0.2, -0.2, 0, 1, 0,    0, 1, 0, //75
        //I - bottom
        0.5, -0.8, 0, 0, 1, 0,    0, -1, 0, //76
        0.4, -0.7, 0, 0, 1, 0,    0, -1, 0, //77
        0.5, -0.8, -0.2, 0, 1, 0,    0, -1, 0, //78
        0.4, -0.7, -0.2, 0, 1, 0,    0, -1, 0, //79

        //0 - front
        -0.8, 0.9, 0, 1, 1, 0,    0, 0, 1,    //80
        -0.4, 0.9, 0, 1, 1, 0,    0, 0, 1,    //81
        -0.8, 0.3, 0, 1, 1, 0,    0, 0, 1,    //82
        -0.75, 0.3, 0, 1, 1, 0,    0, 0, 1,    //83
        -0.35, 0.3, 0, 1, 1, 0,    0, 0, 1,    //84
        -0.35, 0.9, 0, 1, 1, 0,    0, 0, 1,    //85
        //0 - back
        -0.8, 0.9, -0.2, 1, 1, 0,    0, 0, -1,    //86
        -0.4, 0.9, -0.2, 1, 1, 0,    0, 0, -1,    //87
        -0.8, 0.3, -0.2, 1, 1, 0,    0, 0, -1,    //88
        -0.75, 0.3, -0.2, 1, 1, 0,    0, 0, -1,    //89
        -0.35, 0.3, -0.2, 1, 1, 0,    0, 0, -1,    //90
        -0.35, 0.9, -0.2, 1, 1, 0,    0, 0, -1,    //91
        //0 - left
        -0.8, 0.9, 0, 1, 1, 0,    -1, 0, 0,    //92
        -0.8, 0.3, 0, 1, 1, 0,    -1, 0, 0,    //93
        -0.8, 0.9, -0.2, 1, 1, 0,    -1, 0, 0,    //94
        -0.8, 0.3, -0.2, 1, 1, 0,    -1, 0, 0,    //95
        -0.75, 0.3, 0, 1, 1, 0,    -1, 0, 0,    //96
        -0.35, 0.9, 0, 1, 1, 0,    -1, 0, 0,    //97
        -0.75, 0.3, -0.2, 1, 1, 0,    -1, 0, 0,    //98
        -0.35, 0.9, -0.2, 1, 1, 0,    -1, 0, 0,    //99
        //0 - right
        -0.4, 0.9, 0, 1, 1, 0,    1, 0, 0,    //100
        -0.8, 0.3, 0, 1, 1, 0,    1, 0, 0,    //101
        -0.4, 0.9, -0.2, 1, 1, 0,    1, 0, 0,    //102
        -0.8, 0.3, -0.2, 1, 1, 0,    1, 0, 0,    //103
        -0.35, 0.3, 0, 1, 1, 0,    1, 0, 0,    //104
        -0.35, 0.9, 0, 1, 1, 0,    1, 0, 0,    //105
        -0.35, 0.3, -0.2, 1, 1, 0,    1, 0, 0,    //106
        -0.35, 0.9, -0.2, 1, 1, 0,    1, 0, 0,    //107
        //0 - top
        -0.8, 0.9, 0, 1, 1, 0,    0, 1, 0,    //108
        -0.4, 0.9, 0, 1, 1, 0,    0, 1, 0,    //109
        -0.8, 0.9, -0.2, 1, 1, 0,    0, 1, 0,    //110
        -0.4, 0.9, -0.2, 1, 1, 0,    0, 1, 0,    //111
        //0 - bottom
        -0.75, 0.3, 0, 1, 1, 0,    0, -1, 0,    //112
        -0.35, 0.3, 0, 1, 1, 0,    0, -1, 0,    //113
        -0.75, 0.3, -0.2, 1, 1, 0,    0, -1, 0,    //114
        -0.35, 0.3, -0.2, 1, 1, 0,    0, -1, 0,    //115

        //8 - front
        0.3, 0.9, 0, 0, 0, 1,    0, 0, 1,    //116
        0.7, 0.9, 0, 0, 0, 1,    0, 0, 1,    //117
        0.3, 0.7, 0, 0, 0, 1,    0, 0, 1,    //118
        0.7, 0.7, 0, 0, 0, 1,    0, 0, 1,    //119
        0.5, 0.6, 0, 0, 0, 1,    0, 0, 1,    //120
        0.3, 0.5, 0, 0, 0, 1,    0, 0, 1,    //121
        0.7, 0.5, 0, 0, 0, 1,    0, 0, 1,    //122
        0.3, 0.3, 0, 0, 0, 1,    0, 0, 1,    //123
        0.7, 0.3, 0, 0, 0, 1,    0, 0, 1,    //124
        //8 - back
        0.3, 0.9, -0.2, 0, 0, 1,    0, 0, -1,    //125
        0.7, 0.9, -0.2, 0, 0, 1,    0, 0, -1,    //126
        0.3, 0.7, -0.2, 0, 0, 1,    0, 0, -1,    //127
        0.7, 0.7, -0.2, 0, 0, 1,    0, 0, -1,    //128
        0.5, 0.6, -0.2, 0, 0, 1,    0, 0, -1,    //129
        0.3, 0.5, -0.2, 0, 0, 1,    0, 0, -1,    //130
        0.7, 0.5, -0.2, 0, 0, 1,    0, 0, -1,    //131
        0.3, 0.3, -0.2, 0, 0, 1,    0, 0, -1,    //132
        0.7, 0.3, -0.2, 0, 0, 1,    0, 0, -1,    //133
        //8 - left
        0.3, 0.9, 0, 0, 0, 1,    -1, 0, 0,    //134
        0.3, 0.7, 0, 0, 0, 1,    -1, 0, 0,    //135
        0.3, 0.9, -0.2, 0, 0, 1,    -1, 0, 0,    //136
        0.3, 0.7, -0.2, 0, 0, 1,    -1, 0, 0,    //137
        0.5, 0.6, 0, 0, 0, 1,    -1, 0, 0,    //138
        0.5, 0.6, -0.2, 0, 0, 1,    -1, 0, 0,    //139
        0.3, 0.5, 0, 0, 0, 1,    -1, 0, 0,    //140
        0.3, 0.5, -0.2, 0, 0, 1,    -1, 0, 0,    //141
        0.3, 0.3, 0, 0, 0, 1,    -1, 0, 0,    //142
        0.3, 0.3, -0.2, 0, 0, 1,    -1, 0, 0,    //143
        //8 - right
        0.7, 0.9, 0, 0, 0, 1,    1, 0, 0,    //144
        0.7, 0.7, 0, 0, 0, 1,    1, 0, 0,    //145
        0.7, 0.9, -0.2, 0, 0, 1,    1, 0, 0,    //146
        0.7, 0.7, -0.2, 0, 0, 1,    1, 0, 0,    //147
        0.5, 0.6, 0, 0, 0, 1,    1, 0, 0,    //148
        0.5, 0.6, -0.2, 0, 0, 1,    1, 0, 0,    //149
        0.7, 0.5, 0, 0, 0, 1,    1, 0, 0,    //150
        0.7, 0.5, -0.2, 0, 0, 1,    1, 0, 0,    //152
        0.7, 0.3, 0, 0, 0, 1,    1, 0, 0,    //151
        0.7, 0.3, -0.2, 0, 0, 1,    1, 0, 0,    //153
        //8 - top
        0.3, 0.9, 0, 0, 0, 1,    0, 1, 0,    //154
        0.7, 0.9, 0, 0, 0, 1,    0, 1, 0,    //155
        0.3, 0.9, -0.2, 0, 0, 1,    0, 1, 0,    //156
        0.7, 0.9, -0.2, 0, 0, 1,    0, 1, 0,    //157
        //8 - bottom
        0.3, 0.3, 0, 0, 0, 1,    0, -1, 0,    //158
        0.7, 0.3, 0, 0, 0, 1,    0, -1, 0,    //159
        0.3, 0.3, -0.2, 0, 0, 1,    0, -1, 0,    //160
        0.7, 0.3, -0.2, 0, 0, 1,    0, -1, 0,    //161
    ];

    var indices = [
        // M
        0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 8, 9,    
        10, 11, 12, 13, 14, 15, 16, 17, 18, 17, 18, 19,
        20, 21, 22, 20, 22, 23, 
        24, 25, 26, 24, 26, 27,
        28, 29, 30, 28, 30, 31, 29, 30, 32, 30, 32, 33,
        34, 35, 36, 35, 36, 37, 35, 37, 38, 37, 38, 40, 38, 39, 40, 39, 40, 41, 39, 41, 42, 41, 42, 43,
        // I 
        44, 45, 46, 45, 46, 47, 46, 47, 48, 47, 48, 49, 48, 49, 50,
        51, 52, 53, 52, 53, 54, 53, 54, 55, 54, 55, 56, 55, 56, 57,
        58, 59, 61, 59, 61, 62, 59, 60, 62, 60, 62, 63,
        64, 65, 68, 65, 68, 69, 65, 66, 69, 66, 69, 70, 66, 67, 70, 67, 70, 71,
        72, 73, 74, 73, 74, 75,
        76, 77, 78, 77, 78, 79,
        // 0
        80, 81, 82, 83, 84, 85,
        86, 87, 88, 89, 90, 91,
        92, 93, 94, 93, 94, 95, 96, 97, 98, 97, 98, 99,
        100, 101, 102, 101, 102, 103, 104, 105, 106, 105, 106, 107,
        108, 109, 110, 109, 110, 111,
        112, 113, 114, 113, 114, 115,
        // 8
        116, 117, 118, 117, 118, 119, 118, 119, 120, 120, 121, 122, 121, 122, 123, 122, 123, 124,
        125, 126, 127, 126, 127, 128, 127, 128, 129, 129, 130, 131, 130, 131, 132, 131, 132, 133,
        134, 135, 136, 135, 136, 137, 135, 137, 138, 137, 138, 139, 138, 139, 140, 139, 140, 141, 140, 141, 142, 141, 142, 143,
        144, 145, 146, 145, 146, 147, 145, 147, 148, 147, 148, 149, 148, 149, 150, 149, 150, 151, 150, 151, 152, 151, 152, 153,
        154, 155, 156, 155, 156, 157,
        158, 159, 160, 159, 160, 161

    ];

    // Create a linked-list for storing the vertices data in the GPU realm
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    // VERTEX SHADER
    var vertexShaderCode = `
        attribute vec3 aPosition;
        attribute vec3 aColor;
        attribute vec3 aNormal;
        uniform mat4 uModel;
        uniform mat4 uView;
        uniform mat4 uProjection;
        varying vec3 vPosition;
        varying vec3 vColor;
        varying vec3 vNormal;
        void main () {
            vec4 position = vec4(aPosition, 1.0);
            gl_Position = uProjection * uView * uModel * position;
            // gl_Position is the final destination for storing
            //  positional data for the rendered vertex
            vColor = aColor;
            vNormal = aNormal;
            vPosition = (uModel * position).xyz;
        }
    `;
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);

    // FRAGMENT SHADER
    var fragmentShaderCode = `
        precision mediump float;
        varying vec3 vColor;
        uniform vec3 uLightConstant;      // It represents the light color
        uniform float uAmbientIntensity;  // It represents the light intensity
        varying vec3 vPosition;
        varying vec3 vNormal;
        uniform vec3 uLightPosition;
        uniform vec3 uViewerPosition;
        uniform mat3 uNormalModel;
        void main() {
            vec3 ambient = uLightConstant * uAmbientIntensity;
            vec3 lightDirection = uLightPosition - vPosition;
            vec3 normalizedLight = normalize(lightDirection);
            vec3 normalizedNormal = normalize(uNormalModel * vNormal);
            float cosTheta = dot(normalizedNormal, normalizedLight);
            vec3 diffuse = vec3(0.0, 0.0, 0.0);
            if (cosTheta > 0.0) {
                float diffuseIntensity = cosTheta;
                diffuse = uLightConstant * diffuseIntensity;
            }
            vec3 normalizedReflector = normalize(reflect(-lightDirection, normalizedNormal));
            vec3 normalizedViewer = normalize(uViewerPosition - vPosition);
            float cosPhi = dot(normalizedReflector, normalizedViewer);
            vec3 specular = vec3(0., 0., 0.);
            if (cosPhi > 0.) {
                float shininessConstant = 100.0;    // bare minimum spec for metal
                float specularIntensity = pow(cosPhi, shininessConstant);
                specular = uLightConstant * specularIntensity;
            }
            vec3 phong = ambient + diffuse + specular;
            gl_FragColor = vec4(phong * vColor, 1.0);
            // gl_FragColor is the final destination for storing
            //  color data for the rendered fragment
        }
    `;
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    // Local variables
    var isAnimated = false;
    var theta = 0.0;
    var direction = "";
    var dX = 0.0;
    var dY = 0.0;
    // For the model (all linear transformation)
    var uModel = gl.getUniformLocation(shaderProgram, "uModel");
    // For the camera
    var camera = [0.0, 0.0, 5.0];
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var view = glMatrix.mat4.create();  // Create an identity matrix
    glMatrix.mat4.lookAt(
        view,
        camera,
        [camera[0], 0.0, -10.0],
        [0.0, 1.0, 0.0]
    );
    gl.uniformMatrix4fv(uView, false, view);
    // For the projection
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
    var perspective = glMatrix.mat4.create();
    glMatrix.mat4.perspective(
        perspective,
        Math.PI/3,  // 60 degrees
        1.0,
        0.5, 
        10.0
    );
    gl.uniformMatrix4fv(uProjection, false, perspective);

    // For the lighting and shading
    var uLightConstant = gl.getUniformLocation(shaderProgram, "uLightConstant");
        // Ambient
    var uAmbientIntensity = gl.getUniformLocation(shaderProgram, "uAmbientIntensity");
    gl.uniform3fv(uLightConstant, [1.0, 1.0, 1.0]);   // white color
    gl.uniform1f(uAmbientIntensity, 0.4);             // 40% intensity
        // Diffuse
    var uLightPosition = gl.getUniformLocation(shaderProgram, "uLightPosition");
    gl.uniform3fv(uLightPosition, [1.0, 0.0, 1.0]);
    var uNormalModel = gl.getUniformLocation(shaderProgram, "uNormalModel");
        // Specular
    var uViewerPosition = gl.getUniformLocation(shaderProgram, "uViewerPosition");

    // Local functions
        // MOUSE
    var dragging, prevx, prevy, rotation = glMatrix.mat4.create();
    function onMouseDown (event) {
        var x = event.clientX;
        var y = event.clientY;
        var rect = event.target.getBoundingClientRect();
        if (
            rect.left <= x &&
            rect.right >= x &&
            rect.top <= y &&
            rect.bottom >= y
        ) {
            dragging = true;
            prevx = x;
            prevy = y;
        }
    }
    function onMouseUp (event) {
        dragging = false;
    }
    function onMouseMove (event) {
        if (dragging) {
            var x = event.clientX;
            var y = event.clientY;
            var xdiff = x - prevx;
            var ydiff = y - prevy;
            var inverseRotation = glMatrix.mat4.create();
            glMatrix.mat4.invert(inverseRotation, rotation);
            var xAxis = [1, 0, 0, 0];
            var yAxis = [0, 1, 0, 0];
            glMatrix.vec4.transformMat4(xAxis, xAxis, inverseRotation);
            glMatrix.vec4.transformMat4(yAxis, yAxis, inverseRotation);
            glMatrix.mat4.rotate(rotation, rotation, glMatrix.glMatrix.toRadian(xdiff), yAxis);
            glMatrix.mat4.rotate(rotation, rotation, glMatrix.glMatrix.toRadian(ydiff), xAxis);
            prevx = x;
            prevy = y;
        }
    }
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
        // KEYBOARD
    function onKeyDown (event) {
        switch (event.keyCode) {
            case 87: // Object UP
                direction = "up";
                break;
            case 83: // Object DOWN
                direction = "down";
                break;
            case 68: // Object RIGHT
                direction = "right";
                break;
            case 65: // Object LEFT
                direction = "left";
                break;
            case 38: // Camera UP
                camera[1] += 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            case 40: // Camera DOWN
                camera[1] -= 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            case 39: // Camera RIGHT
                camera[0] += 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            case 37: // Camera LEFT
                camera[0] -= 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            default:
                break;
        }
    }
    function onKeyUp (event) {
        direction = "";
    }
    function onKeyPress (event) {
        console.log('keypress');
        if (event.keyCode == 32) {  // Space button
            isAnimated = !isAnimated;
        }
    }
    document.addEventListener("keypress", onKeyPress)
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);

    // Teach the GPU how to collect
    //  the positional values from ARRAY_BUFFER
    //  for each vertex being processed
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition, 
        3, 
        gl.FLOAT, 
        false, 
        9 * Float32Array.BYTES_PER_ELEMENT, 
        0);
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor, 
        3, 
        gl.FLOAT, 
        false, 
        9 * Float32Array.BYTES_PER_ELEMENT, 
        3 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);
    var aNormal = gl.getAttribLocation(shaderProgram, "aNormal");
    gl.vertexAttribPointer(
        aNormal, 
        3, 
        gl.FLOAT, 
        false, 
        9 * Float32Array.BYTES_PER_ELEMENT, 
        6 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aNormal);
    
    function render() {
        gl.enable(gl.DEPTH_TEST);
        gl.clearColor(0.0, 0.0,   0.0,  1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        var model = glMatrix.mat4.create();
        if (isAnimated) {
            theta += 0.01;
        }
        switch (direction) {
            case "up":
                dY += 0.1;
                break;
            case "down":
                dY -= 0.1;
                break;
            case "left":
                dX -= 0.1;
                break;
            case "right":
                dX += 0.1;
                break;
        
            default:
                break;
        }
        glMatrix.mat4.translate(model, model, [dX, dY, 0.0]);
        glMatrix.mat4.rotateZ(rotation, rotation, theta);
        glMatrix.mat4.rotateY(rotation, rotation, theta);
        glMatrix.mat4.multiply(model, model, rotation);
        gl.uniformMatrix4fv(uModel, false, model);

        // For transforming the normal vector
        var normalModel = glMatrix.mat3.create();
        glMatrix.mat3.normalFromMat4(normalModel, model);
        gl.uniformMatrix3fv(uNormalModel, false, normalModel);

        gl.drawElements(gl.TRIANGLES, indices.length, 
            gl.UNSIGNED_SHORT, 0);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}