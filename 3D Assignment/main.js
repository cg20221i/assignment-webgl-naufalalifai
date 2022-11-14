function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    var vertices = [
        //alphabet M
        -0.7, -0.2, 
        -0.4, -0.5,
        -0.7, -0.8,
        -0.1, -0.2,
        -0.4, -0.5,
        -0.1, -0.8,
        -0.55, -0.65,
        -0.4, -0.5,
        -0.4, -0.8,
        -0.25, -0.65,

        //aphabet I
        0.5, -0.8,
        0.4, -0.7,
        0.5, -0.6,
        0.4, -0.5,
        0.5, -0.4,
        0.4, -0.3,
        0.5, -0.2,
        0.6, -0.3,

        0.4, -0.1,
        0.5, -0.05,
        0.5, -0.15
    ];

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)

    // VERTEX SHADER
    var vertexShaderCode = `
        attribute vec2 aPosition;
        void main() {
            gl_PointSize = 10.0;
            gl_Position = vec4(aPosition, 0.0, 1.0);
        }
    `;
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);

    // FRAGMENT SHADER
    var fragmentShaderCode = `
        precision mediump float;
        void main() {
            gl_FragColor = vec4(0.98, 0.88, 0.13, 1.0);
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

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);

    gl.clearColor(0.85, 0.16, 0.11, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    //alphabet M
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    gl.drawArrays(gl.TRIANGLE_STRIP, 6, 4);

    //alphabet I
    gl.drawArrays(gl.TRIANGLE_STRIP, 10, 8);
    gl.drawArrays(gl.TRIANGLES, 18, 3);
}