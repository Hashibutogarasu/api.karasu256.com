// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'characters_controller_import_from_hoyo_lab_query_parameter.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$CharactersControllerImportFromHoyoLabQueryParameter
    extends CharactersControllerImportFromHoyoLabQueryParameter {
  @override
  final String entryPageId;

  factory _$CharactersControllerImportFromHoyoLabQueryParameter(
          [void Function(
                  CharactersControllerImportFromHoyoLabQueryParameterBuilder)?
              updates]) =>
      (new CharactersControllerImportFromHoyoLabQueryParameterBuilder()
            ..update(updates))
          ._build();

  _$CharactersControllerImportFromHoyoLabQueryParameter._(
      {required this.entryPageId})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(entryPageId,
        r'CharactersControllerImportFromHoyoLabQueryParameter', 'entryPageId');
  }

  @override
  CharactersControllerImportFromHoyoLabQueryParameter rebuild(
          void Function(
                  CharactersControllerImportFromHoyoLabQueryParameterBuilder)
              updates) =>
      (toBuilder()..update(updates)).build();

  @override
  CharactersControllerImportFromHoyoLabQueryParameterBuilder toBuilder() =>
      new CharactersControllerImportFromHoyoLabQueryParameterBuilder()
        ..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is CharactersControllerImportFromHoyoLabQueryParameter &&
        entryPageId == other.entryPageId;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, entryPageId.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(
            r'CharactersControllerImportFromHoyoLabQueryParameter')
          ..add('entryPageId', entryPageId))
        .toString();
  }
}

class CharactersControllerImportFromHoyoLabQueryParameterBuilder
    implements
        Builder<CharactersControllerImportFromHoyoLabQueryParameter,
            CharactersControllerImportFromHoyoLabQueryParameterBuilder> {
  _$CharactersControllerImportFromHoyoLabQueryParameter? _$v;

  String? _entryPageId;
  String? get entryPageId => _$this._entryPageId;
  set entryPageId(String? entryPageId) => _$this._entryPageId = entryPageId;

  CharactersControllerImportFromHoyoLabQueryParameterBuilder() {
    CharactersControllerImportFromHoyoLabQueryParameter._defaults(this);
  }

  CharactersControllerImportFromHoyoLabQueryParameterBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _entryPageId = $v.entryPageId;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(CharactersControllerImportFromHoyoLabQueryParameter other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$CharactersControllerImportFromHoyoLabQueryParameter;
  }

  @override
  void update(
      void Function(CharactersControllerImportFromHoyoLabQueryParameterBuilder)?
          updates) {
    if (updates != null) updates(this);
  }

  @override
  CharactersControllerImportFromHoyoLabQueryParameter build() => _build();

  _$CharactersControllerImportFromHoyoLabQueryParameter _build() {
    final _$result = _$v ??
        new _$CharactersControllerImportFromHoyoLabQueryParameter._(
            entryPageId: BuiltValueNullFieldError.checkNotNull(
                entryPageId,
                r'CharactersControllerImportFromHoyoLabQueryParameter',
                'entryPageId'));
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
