# Data Schema

## Users

```
userID {
  joined: datetime
  lastLogin: datetime
  displayName: string
  sso: boolean                  // Set whether SSO or email/password account.
  declared13plus: boolean       // Optional - For none SSO sign ups to declare they are over 13.
  suspended: boolean            // Default = false
  suspensionDate: datetime      // Optional
  suspensionReason: string      // Optional
}
```

## Groups

```
groupID {
  created: datetime
  name: string
  description: string
  logoImage: string             // Reference to object in storage bucket.
  headerImage: string           // Reference to object in storage bucket.
  creator: string               // User ID
  admins: string[]              // User IDs
  organisers: string[]          // User IDs
  suspended: boolean            // Default = false
  suspensionDate: datetime      // Optional
  suspensionReason: string      // Optional
}
```

## Events

```
eventID {
  created: datetime
  eventTime: datetime
  name: string
  description: string
  address: string
  url: string
  streamed: boolean
  onlineOnly: boolean
  groupID: string       // Reference to group event is associated with.
  organiserID:          // Reference to user who created event. Show display name only.
}
```

## User Subscriptions

```
{
  userID: string
  groupID: string
}
```

## Event Attendance

```
{
  userID: string
  eventID: string
}
```
