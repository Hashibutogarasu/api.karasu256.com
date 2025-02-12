// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'versions_controller_create_request.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$VersionsControllerCreateRequest
    extends VersionsControllerCreateRequest {
  @override
  final String? name;
  @override
  final String versionString;
  @override
  final bool? released;

  factory _$VersionsControllerCreateRequest(
          [void Function(VersionsControllerCreateRequestBuilder)? updates]) =>
      (new VersionsControllerCreateRequestBuilder()..update(updates))._build();

  _$VersionsControllerCreateRequest._(
      {this.name, required this.versionString, this.released})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(
        versionString, r'VersionsControllerCreateRequest', 'versionString');
  }

  @override
  VersionsControllerCreateRequest rebuild(
          void Function(VersionsControllerCreateRequestBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  VersionsControllerCreateRequestBuilder toBuilder() =>
      new VersionsControllerCreateRequestBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is VersionsControllerCreateRequest &&
        name == other.name &&
        versionString == other.versionString &&
        released == other.released;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, versionString.hashCode);
    _$hash = $jc(_$hash, released.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'VersionsControllerCreateRequest')
          ..add('name', name)
          ..add('versionString', versionString)
          ..add('released', released))
        .toString();
  }
}

class VersionsControllerCreateRequestBuilder
    implements
        Builder<VersionsControllerCreateRequest,
            VersionsControllerCreateRequestBuilder> {
  _$VersionsControllerCreateRequest? _$v;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  String? _versionString;
  String? get versionString => _$this._versionString;
  set versionString(String? versionString) =>
      _$this._versionString = versionString;

  bool? _released;
  bool? get released => _$this._released;
  set released(bool? released) => _$this._released = released;

  VersionsControllerCreateRequestBuilder() {
    VersionsControllerCreateRequest._defaults(this);
  }

  VersionsControllerCreateRequestBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _name = $v.name;
      _versionString = $v.versionString;
      _released = $v.released;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(VersionsControllerCreateRequest other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$VersionsControllerCreateRequest;
  }

  @override
  void update(void Function(VersionsControllerCreateRequestBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  VersionsControllerCreateRequest build() => _build();

  _$VersionsControllerCreateRequest _build() {
    final _$result = _$v ??
        new _$VersionsControllerCreateRequest._(
            name: name,
            versionString: BuiltValueNullFieldError.checkNotNull(versionString,
                r'VersionsControllerCreateRequest', 'versionString'),
            released: released);
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
