<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

use Symfony\Component\HttpFoundation\Request;
use Illuminate\Support\Facades\Validator;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\User;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function username()
    {
        return 'nb_usuario';
    }

    public function login(Request $request) 
    {

        $this->validate($request, [
          'nb_usuario'  => 'required|string|max:25',
          'password'    => 'required|string|min:6'
        ],
        [
            'nb_usuario.required' => 'El Usuario es Requerido'
        ]
        );

        $credentials = $request->only('nb_usuario', 'password');

        try 
        {
            if (!$token = JWTAuth::attempt($credentials)) 
            {
                return response()->json(['error' => 'Usuario y/o password son Incorrectos!'], 401);
            }
        } 
        catch (JWTException $e) 
        {
            return response()->json(['error' => 'Cannot create a token!'], 500);
        }

        $user = JWTAuth::setToken($token)->authenticate();
        
        return response()->json(["token" => $token, "user" => $user]);
    }

    protected function fotmatToken($token)
    {
        return [
            'access_token' => $token,
            'token_type'   => 'bearer',
            'expires_in'   => auth()->factory()->getTTL() * 60
        ];
    }

    public function logout() 
    {
        $token = JWTAuth::getToken();

        JWTAuth::invalidate($token);
    }

    public function refreshToken() 
    {
       //return $this->respondWithToken(auth()->refresh());
          
        $token = JWTAuth::getToken();

        $new_token = JWTAuth::refresh($token);

        return response()->json(["token" => $new_token]);
    }
}
