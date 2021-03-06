import { DTO } from 'src/features/dto';

export interface TagDTO extends DTO {
    id: number;
    title: string;
    draft: boolean;

    user: string;
    articles: string[];
}
