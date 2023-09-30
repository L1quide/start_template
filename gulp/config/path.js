// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        html: `${buildFolder}`,
        scss: `${buildFolder}/css`,
        images: `${buildFolder}/img`,
        js: `${buildFolder}/js`,
        fonts: `${buildFolder}/fonts`,
        svg: `${buildFolder}/img/svg`,
        
    },
    src: {
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/*.scss`,
        images: `${srcFolder}/img/**/*.*`, //{jpg, jpeg, png, gif, webp}
        js: `${srcFolder}/js/*.js`,
        svg: `${srcFolder}/img/**/*.svg`,
        fonts: `${srcFolder}/fonts/*`,
       

    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
        images: `${srcFolder}/img/**/*.*`,
        js: `${srcFolder}/js/**/*.js`,
       
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ''
}