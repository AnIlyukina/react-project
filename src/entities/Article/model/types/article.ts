import {User} from "entities/User";

export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAt',
}

export enum ArticleView {
    BIG = 'BIG',
    SMALL = 'SMALL',
}

export enum ArticleTypeBlock {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE',
}

export interface ArticleBlockBase {
    id: string;
    type: ArticleTypeBlock;
}
export interface ArticleTextBlock extends ArticleBlockBase{
    type: ArticleTypeBlock.TEXT;
    title?: string;
    paragraphs: Array<string>;
}

export interface ArticleImageBlock extends ArticleBlockBase{
    type: ArticleTypeBlock.IMAGE;
    src: string;
    title: string;
}

export interface ArticleCodeBlock extends ArticleBlockBase{
    type: ArticleTypeBlock.CODE;
    code: string;
}

export type ArticleBlock = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock;

export enum ArticleType {
    ALL = 'ALL',
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export interface Article {
    id: string;
    title: string;
    user: User;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: Array<ArticleType>;
    blocks: Array<ArticleBlock>;
}