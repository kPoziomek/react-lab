import {useState} from "react";
import {MeetingsList} from "./MeetingsList.tsx";
import {NewMeetingForm} from "./NewMeetingForm.tsx";


export const MeetingsPage=()=> {
  const [meetings, setMeetings] = useState<{ title: string; description: string }[]>([]);

  function handleNewMeeting(meeting:{title: string, description: string}) {
    const nextMeetings = [...meetings, meeting];
    setMeetings(nextMeetings);
  }

  return (
    <div>
      <h2>Zajęcia ({meetings.length})</h2>
      <NewMeetingForm onSubmit={(meeting) => handleNewMeeting(meeting)}/>
      <MeetingsList meetings={meetings}/>
    </div>
  )
}
