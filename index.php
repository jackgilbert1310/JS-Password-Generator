<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Generator</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

    <script src="app.js" async defer></script>
</head>

<style>
    progress {
        width: 100%;
        height: 40px;
    }
</style>

<body>
    
    <div id="app" class="container text-center">
        <h1 class="mt-5 mb-5">Password Generator</h1>

        <div>
            <div class="row">
                <div class="col-10">
                    <input type="text" id="password" placeholder="Your Password" class="form-control">
                </div>
                <div class="col-2">
                    <button id="copyPassBtn" class="btn btn-primary">Copy Password</button><br /><br />
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col mb-3">
                <progress max="100" value="0" id="strengthBar"></progress>
            </div>
        </div>

        <div class="custom-control custom-radio custom-control-inline">
            <div class="row">
                <div class="col">
                    <input type="text" id="passLength" placeholder="Length" class="form-control" value="8">
                </div>
                <div class="col">
                    Include Uppercase? <input type="checkbox" id="includeUppercase" checked>
                </div>
                <div class="col">
                    Include Lowercase? <input type="checkbox" id="includeLowercase" checked>
                </div>
                <div class="col">
                    Include numbers? <input type="checkbox" id="includeNumbers" checked>
                </div>
                <div class="col">
                    Include Symbols? <input type="checkbox" id="includeSymbols" checked>
                </div>
            </div>
        </div>

        <button id="generatePassBtn" class="btn btn-success">Generate Password</button>
    </div>

</body>
</html>