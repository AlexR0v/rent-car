import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { CardContainer, DateCalendar, Icon, ItemContainer, LineSeparator, Name, SmallIcon } from './book-card.styles'
import { faCalendarAlt, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import 'react-calendar/dist/Calendar.css'
import { Marginer } from '../../ui/marginer'
import { Button } from '../../ui/button'

const BookCard = () => {
  const [ startDate, setStartDate ] = useState<Date>(new Date())
  const [ isStartCalendarOpen, setStartCalendarOpen ] = useState(false)
  const [ returnDate, setReturnDate ] = useState<Date>(new Date())
  const [ isReturnCalendarOpen, setReturnCalendarOpen ] = useState(false)

  const toggleStartDateCalendar = () => {
    setStartCalendarOpen(!isStartCalendarOpen)
    if (isReturnCalendarOpen) setReturnCalendarOpen(false)
  }

  const toggleReturnDateCalendar = () => {
    setReturnCalendarOpen(!isReturnCalendarOpen)
    if (isStartCalendarOpen) setStartCalendarOpen(false)
  }

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartDateCalendar}>Pick Up Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isStartCalendarOpen && (
          <DateCalendar
            value={startDate}
            onChange={setStartDate as any}
          />
        )}
      </ItemContainer>
      <LineSeparator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnDateCalendar}>Return Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isReturnCalendarOpen && (
          <DateCalendar
            offset
            value={returnDate}
            onChange={setReturnDate as any}
          />
        )}
      </ItemContainer>
      <Marginer
        margin='2em'
        direction='horizontal'
      />
      <Button text='Book Your Ride' />
    </CardContainer>
  )
}

export default BookCard
