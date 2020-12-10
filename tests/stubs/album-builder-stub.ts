import { AlbumBuilder } from 'src/albums/use-cases/album-builder';

export class AlbumBuilderStub extends AlbumBuilder {
    protected id : number = 1;
    protected name: string = 'Black power';
    protected width: number = 100;
    protected height: number = 150;
    protected url: string = 'http://uneUrl.com';
    protected description: string = 'lorem ipsum';
    protected duration: number = 9;
}