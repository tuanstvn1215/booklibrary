import classNames from 'classnames'
import './Produce.css'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
export default function Produce(props) {
    const { img, title, author } = props.item
    return (
        <Col lg='3'>
            <div className={classNames('Produce')}>
                <Link to='sfd'>
                    <div className='Produce__thumb'>
                        <img src={img} width='100%' alt={title} />
                    </div>
                    <div className='Produce__content'>
                        <div className='Produce__content__name'>{title}</div>
                        <span className='Produce__content__author'>
                            {author}
                        </span>
                    </div>
                </Link>
            </div>
        </Col>
    )
}
