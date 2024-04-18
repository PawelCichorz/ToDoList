const express = require('express')
const router = express.Router()

const noteActions = require('../actions/noteActions')
const userControler = require('../actions/user-controler')



//Poniedziałek

//pobieranie notatek
router.get('/notesm',noteActions.getAllnotesM)
//pobieranie konkretnej notatki
router.get('/notesm/:id',noteActions.getNoteM)
//zapisywanie
router.post('/notesm',noteActions.saveNoteM)
//edytowanie
router.put('/notesm/:id',noteActions.updateNoteM)
//usuwanie
router.delete('/notesm/:id',noteActions.deleteNoteM)

//Wtorek

//pobieranie notatek
router.get('/notest',noteActions.getAllnotesT)
//pobieranie konkretnej notatki
router.get('/notest/:id',noteActions.getNoteT)
//zapisywanie
router.post('/notest',noteActions.saveNoteT)
//edytowanie
router.put('/notest/:id',noteActions.updateNoteT)
//usuwanie
router.delete('/notest/:id',noteActions.deleteNoteT)

//środa
//pobieranie notatek
router.get('/notess',noteActions.getAllnotesS)
//pobieranie konkretnej notatki
router.get('/notess/:id',noteActions.getNoteS)
//zapisywanie
router.post('/notess',noteActions.saveNoteS)
//edytowanie
router.put('/notess/:id',noteActions.updateNoteS)
//usuwanie
router.delete('/notess/:id',noteActions.deleteNoteS)


//czwartek
router.get('/notesc',noteActions.getAllnotesC)
//pobieranie konkretnej notatki
router.get('/notesc/:id',noteActions.getNoteC)
//zapisywanie
router.post('/notesc',noteActions.saveNoteC)
//edytowanie
router.put('/notesc/:id',noteActions.updateNoteC)
//usuwanie
router.delete('/notesc/:id',noteActions.deleteNoteC)


//piątek
router.get('/notespi',noteActions.getAllnotesP)
//pobieranie konkretnej notatki
router.get('/notespi/:id',noteActions.getNoteP)
//zapisywanie
router.post('/notespi',noteActions.saveNoteP)
//edytowanie
router.put('/notespi/:id',noteActions.updateNoteP)
//usuwanie
router.delete('/notespi/:id',noteActions.deleteNoteP)

//sobota


router.get('/notesso',noteActions.getAllnotesSo)
//pobieranie konkretnej notatki
router.get('/notesso/:id',noteActions.getNoteSo)
//zapisywanie
router.post('/notesso',noteActions.saveNoteSo)
//edytowanie
router.put('/notesso/:id',noteActions.updateNoteSo)
//usuwanie
router.delete('/notesso/:id',noteActions.deleteNoteSo)

//niedziela
router.get('/notesn',noteActions.getAllnotesN)
//pobieranie konkretnej notatki
router.get('/notesn/:id',noteActions.getNoteN)
//zapisywanie
router.post('/notesn',noteActions.saveNoteN)
//edytowanie
router.put('/notesn/:id',noteActions.updateNoteN)
//usuwanie
router.delete('/notesn/:id',noteActions.deleteNoteN)

//rejestracja
router.post('/zarejestruj',userControler.register)

//logowanie
router.post('/logowanie',userControler.login)


    module.exports= router