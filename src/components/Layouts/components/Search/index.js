import { useEffect, useRef, useState } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import { useDebounce } from '~/components/hook';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchAccount, setSearchAccount] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const debounceValue = useDebounce(searchValue, 700);

    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchAccount([]);
            return;
        }

        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounceValue)}&type=less`)
            .then((response) => response.json())
            .then((json) => {
                setSearchAccount(json.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [debounceValue]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleClear = () => {
        setSearchValue('');
        setSearchAccount([]);
        inputRef.current.focus();
    };

    const handleAccountItem = () => {
        setSearchValue('');
        setSearchAccount([]);
    };

    return (
        <HeadlessTippy
            appendTo={document.body}
            visible={showResult && searchAccount.length > 0}
            interactive={true}
            render={(attrs) => (
                <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-label')}>Account</h4>

                        {searchAccount.map((account) => (
                            <AccountItem onClick={handleAccountItem} key={account.id} data={account}></AccountItem>
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    type="text"
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />

                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')}>
                    <SearchIcon></SearchIcon>
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
