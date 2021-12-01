const express = require('express')
const router = express.Router()
var fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');


// GET ALL NOTES
router.get('/fetchallnotes', fetchuser, async (req, res) => {

    try {
    const notes = await Note.find({user: req.user.id})
    res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }
})


// ADD A NOTE
router.post('/addnote', [
    body('title', 'Enter a valid name').isLength({ min: 3 }),
    body('description', 'Enter a valid email').isLength({ min: 5 }),
  ] ,fetchuser, async (req, res) => {

    const {title, description, tag} = req.body;

    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
      const note = new Note({
          title, description,tag, user: req.user.id
      })
      const saveNote = await note.save()
      res.json(saveNote)

      
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }

})

// UPDATE A NOTE

router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const {title, description, tag, date} = req.body;
    
    try 
    {
    const newNote = {};
    if(title){newNote.title = title}
    if(description){newNote.description = description}
    if(tag){newNote.tag = tag}
    {newNote.date = Date.now()}

    let note = await Note.findById(req.params.id)
    if(!note){
        return res.status(404).send("Sorry ! This Note is not available in our database")
    }

    if(note.user.toString() !== req.user.id)
    {
        return res.status(401).send("Sorry ! You are not allowed to modify this note")
    }

    note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true}) 
    res.json(note)

    } 
    catch (error) 
    {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }

})


// DELETE A NOTE

router.delete('/deletenote/:id', fetchuser, async (req, res) => {
  const {title, description, tag, date} = req.body;
  
  try 
  {

  let note = await Note.findById(req.params.id)
  if(!note){
      return res.status(404).send("Sorry ! This Note is not available in our database")
  }

  if(note.user.toString() !== req.user.id)
  {
      return res.status(401).send("Sorry ! You are not allowed to modify this note")
  }

  note = await Note.findByIdAndDelete(req.params.id) 
  res.json({"success" : "Note Deleted Successfully", note : note })

  } 
  catch (error) 
  {
  console.error(error.message);
  res.status(500).send("Internal Server Error");
}

})



module.exports = router