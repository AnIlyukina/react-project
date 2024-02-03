import {ArticlesFilters} from '@/features/ArticlesFilters';
import {useArticleFilters} from '@/pages/ArticlesPage/lib/hooks/useArticleFilters';

interface FiltersContainerProps {
    className?: string
}

export const FiltersContainer = ({className}: FiltersContainerProps) => {
    const {
        type,
        order,
        sort,
        onChangeOrder,
        onChangeSort,
        onChangeType,
        onChangeSearch,
        search
    } = useArticleFilters();
    
    return (
        <ArticlesFilters
            className={className}
            type={type}
            order={order}
            sort={sort}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
            onChangeSearch={onChangeSearch}
            onChangeType={onChangeType}
            search={search}
        />
    );
};