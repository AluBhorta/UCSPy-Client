export type Schedule = {
  classes: _Class[]
}

export type _Class = {
  course: string;
  section: string;
  instructor: string;
  room: string;
  timeslot: string;
};