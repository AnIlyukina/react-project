import {User} from '@/entities/User';
import {ArticleTypeBlock, ArticleType} from '../../model/consts/consts';

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