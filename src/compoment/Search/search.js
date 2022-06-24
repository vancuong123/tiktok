import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import * as searchSevices from '~/sevices/searchSevice';
import { Wrapper as PopperWrapper } from '~/compoment/Popper';
import AccountItem from '~/compoment/AccountItem';
import { SearchIcon } from '~/compoment/Icons';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const debouncedValue = useDebounce(searchValue, 800);

    const inputRef = useRef();

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResults([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const results = await searchSevices.search(debouncedValue);
            setSearchResults(results);
            setLoading(false);
        };
        fetchApi();

        setLoading(true);
    }, [debouncedValue]);
    const handleHideResult = () => {
        setShowResult(false);
    };
    const handleRenderedSearch = () => {
        setSearchValue('');
        setSearchResults([]);
        inputRef.current.focus();
    };
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <HeadlessTippy
            appendTo={() => document.body}
            interactive
            visible={showResult && searchResults.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accouts</h4>
                        {searchResults.map((result) => (
                            <AccountItem key={result.id} data={result} onClick={() => searchResults([])} />
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
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={handleChange}
                    onFocus={() => setShowResult(true)}
                />

                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleRenderedSearch}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
