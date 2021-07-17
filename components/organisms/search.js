import PropTypes from 'prop-types'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'
import classnames from 'classnames'
import Mapper from '../../utils/Mapper'

const Search = ({ search }) => {

    const t = useTranslations('site')
    const { locale, push } = useRouter()
    const [dataSearch, setDataSearch] = useState([])

    const onHandleSearch = (e) => {
        var text = e.target.value
        if(text.length > 0) {
            setDataSearch(search[locale].filter(item => item.slug.includes(text)).slice(0, 10))
        } else {
            setDataSearch([])
        }
    }

    const onHandleSelect = (item) => {
        const path = `/${Mapper[`route-${item.type}`]}/${item.slug}`
        push(path, path, {locale})
    }

    return (
        <div className="relative z-10">
            <input type="search" onChange={onHandleSearch} placeholder={t('search')} className="bg-gray-100 w-full p-3 rounded" />
            {dataSearch.length > 0 && <div className="absolute w-full bg-white border rounded mt-1 p-2">
                {dataSearch.map((item, index) => <div key={index} onClick={() => onHandleSelect(item)} className={classnames('py-2 px-5 hover:bg-gray-100 cursor-pointer', {'border-b': index < dataSearch.length - 1})}>{item.title}</div>)}
            </div>}
        </div>
    )
}

export default Search