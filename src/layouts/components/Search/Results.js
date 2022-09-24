import { memo } from 'react';
import AccountItem from '~/components/AccountItem';

function Results({ results, onClick }) {
    return results.map((result) => <AccountItem key={result.id} data={result} onClick={onClick}></AccountItem>);
}

export default memo(Results);
