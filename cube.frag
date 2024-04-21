#version 330 core
out vec4 FragColor;

in vec3 FragPos; // FragPos from vertex shader
uniform samplerCube skybox; // Cube map texture

void main() {
    // Sample from the cube map
    FragColor = texture(skybox, normalize(FragPos));
}
