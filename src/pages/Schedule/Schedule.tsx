import React,  { Component } from 'react'
import Header from '../../components/Header'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  WeekView,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

const timeElapsed = Date.now();
const today = new Date(timeElapsed);
const month = today.getMonth()+1;
const day = today.getDate();
const year = today.getFullYear();
const schedulerData = [
  { startDate: '2020-10-05T09:45', endDate: '2020-10-05T11:00', title: 'Meeting' },
  { startDate: '2020-10-05T12:00', endDate: '2020-10-05T13:30', title: 'Go to a gym' },
];
export class Schedule extends Component<{}, {
  view: string,
  day: number,
  month: number,
  year: number,
  schedulerData: [],
  scheduler: {} }> {

  constructor (props: any) {
    super(props)
    this.state = {
      view: 'day',
      day: day,
      month: month,
      year: year,
      schedulerData: [],
      scheduler: { startDate: '', endDate: '', title: '' }

    }
  }

  getScheduler() {
    fetch(`${process.env.REACT_APP_URL_API}/api/scheduler`, {
            method: 'GET'
        })
        .then(res => {
            return res.json()
        })
        .then( result => { this.setState({ schedulerData: result }) })
    }

  render() {
    return (
      <section className="scheduler">
      <Header />
        <section className="scheduler-header">
          <div className="scheduler-header-fild-1">
            <Button
              className="btn-new-register"
              variant="contained"
              color="primary">Novo cadastro</Button>
          </div>
          <div className="scheduler-header-fild-2">
            <Button
            onClick={() => {this.setView('day')}}>Dia</Button>
            <Button
            onClick={() => {this.setView('week')}}>Semana</Button>
            <Button
            onClick={() => {this.setView('month')}}>Mês</Button>
          </div>
        </section>
        <section className="scheduler-body">
          <Paper>
            <Scheduler
              data={ this.state.schedulerData }>
            <ViewState currentDate={`${this.state.year}-${this.state.month}-${this.state.day}`}/>
            { this.state.view === 'month' ? <MonthView /> :
              this.state.view === 'week' ?
              <WeekView
                startDayHour={9}
                endDayHour={19}/> :
              <DayView
                startDayHour={9}
                endDayHour={19}/> }
            <Appointments />
          </Scheduler>
        </Paper>
        </section>
      </section>
    )
  }

  setView (view: string) {
    this.setState({ view: view })
  }
}

  export default Schedule

