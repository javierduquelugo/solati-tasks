<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Validator;

use App\Models\Tasks;

class TasksController extends Controller
{  

    public function index()
    {
        $response = new \stdClass();
        $response->data = null;
        $response->error = null;
        $response->extra = new \stdClass();
        
        $tasks = Tasks::all();

        if($tasks->isEmpty()){
            $response->message = 'No se encontraron tareas';
            return response() -> json($response, 200);
        }else{
            $response->message = 'Tareas encontradas exitosamente';
            $response->data = $tasks;
        }
        return response() -> json($response, 200);
    }

    public function show($id)
    {
        $response = new \stdClass();
        $response->data = null;
        $response->error = null;
        $response->extra = new \stdClass();

        $task = Tasks::find($id);

        if(!$task){
            $response->message = 'Tarea no encontrada';
            return response() -> json($response, 404);
        }

        $response->message = 'Tarea encontrada exitosamente';
        $response->data = $task;
        
        return response() -> json($response, 200);
    }

    public function store(Request $request)
    {
        $response = new \stdClass();
        $response->data = null;
        $response->error = null;
        $response->extra = new \stdClass();

        $validator = Validator::make($request->all(),[
            'titulo' => 'required|max:64',
            'descripcion' => 'required',
            'estado' => 'required|in:pendiente,completada',
        ]);

        if($validator->fails()) {
            $response->message = 'Error en la validación de los datos';
            $response->data = $request;
            $response->error = $validator->errors();

            return response() -> json($response, 400);
        }
        
        $task = Tasks::create([
            'titulo' => $request->titulo,
            'descripcion' => $request->descripcion,
            'estado' => $request->estado,
        ]);

        if(!$task){
            $response->message = 'Error al crear la tarea';
            $response->data = $request;

            return response() -> json($response, 500);
        }

        $response->message = 'Tarea creada exitosamente';
        $response->data = $task;
       
        return response() -> json($response, 200);      

    }

    public function update(Request $request, $id)
    {
        $response = new \stdClass();
        $response->data = null;
        $response->error = null;
        $response->extra = new \stdClass();

        // Buscamos la tarea
        $task = Tasks::find($id);

        if(!$task){
            $response->message = 'Tarea no encontrada';
            return response() -> json($response, 404);
        }

        // Validamos los datos
        $validator = Validator::make($request->all(),[
            'titulo' => 'required|max:64',
            'descripcion' => 'required',
            'estado' => 'required|in:pendiente,completada',
        ]);

        // Verificamos si las validaciones fallaron
        if($validator->fails()) {
            $response->message = 'Error en la validación de los datos';
            $response->data = $request;
            $response->error = $validator->errors();

            return response() -> json($response, 400);
        }

        // Se reemplazan los datos
        $task->titulo = $request->titulo;
        $task->descripcion = $request->descripcion;
        $task->estado = $request->estado;

        // Se guardan los cambios
        $task->save();

        $response->message = 'Tarea actualizada exitosamente';
        $response->data = $task;
       
        return response() -> json($response, 200);
    }

    public function destroy($id)
    {
        $response = new \stdClass();
        $response->data = null;
        $response->error = null;
        $response->extra = new \stdClass();

        $task = Tasks::find($id);

        if(!$task){
            $response->message = 'Tarea no encontrada';
            return response() -> json($response, 404);
        }

        $task->delete();

        $response->message = 'Tarea eliminada exitosamente';
        $response->data = $task;
        
        return response() -> json($response, 200);
    }
}
